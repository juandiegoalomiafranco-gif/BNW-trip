import { useMemo, useState, type FormEvent } from 'react'
import { days } from '../data/days'
import { meals } from '../data/meals'
import { cityById, restaurantById } from '../data/trip'
import type { CityId, MealSlot, Restaurant } from '../data/types'
import { formatHHMM, formatDayLabel } from '../lib/time'
import { mapsWalkTo } from '../lib/maps'
import { useCheckSet, useStored } from '../lib/storage'
import { Check } from '../components/Check'
import { DayStrip } from '../components/DayStrip'
import { DayHeader } from '../components/DayHeader'
import { walkLabel } from '../components/MealInline'

const KIND_LABEL: Record<string, string> = {
  desayuno: 'Desayuno',
  almuerzo: 'Almuerzo',
  cena: 'Cena',
  snack: 'Parada',
}

interface MiSitio {
  id: string
  name: string
  cityId: CityId
  slotId: string
  note: string
}

function RestaurantCard({
  r,
  checked,
  onToggle,
  featured,
}: {
  r: Restaurant
  checked: boolean
  onToggle: () => void
  featured?: boolean
}) {
  return (
    <div className={`resto${featured ? ' featured' : ''}`}>
      {featured && <div className="resto-flag">Recomendado</div>}
      <Check checked={checked} onToggle={onToggle}>
        <strong>{r.name}</strong>
        <span className="resto-meta">
          {r.cuisine} · <span className="price">{r.price}</span>
          {walkLabel(r) && ` · ${walkLabel(r)}`}
          {r.source === 'oficial' && ' · en el logbook'}
        </span>
      </Check>

      {r.why && <p>{r.why}</p>}
      {r.mustTry.length > 0 && <p className="resto-try">Pedir: {r.mustTry.join(' · ')}</p>}
      {r.heads && <div className="heads">Ojo: {r.heads}</div>}
      <div className="ev-actions">
        <a className="btn" href={mapsWalkTo(r.mapsQuery)} target="_blank" rel="noreferrer">
          Cómo llegar
        </a>
      </div>
    </div>
  )
}

function SlotBlock({
  slot,
  visited,
  mios,
}: {
  slot: MealSlot
  visited: ReturnType<typeof useCheckSet>
  mios: MiSitio[]
}) {
  const picks = slot.picks.map((id) => restaurantById.get(id)).filter(Boolean) as Restaurant[]
  const [top, ...rest] = picks
  const asignados = mios.filter((m) => m.slotId === slot.id)

  if (slot.kind === 'desayuno') {
    return (
      <div className="slot compact">
        <div className="slot-head">
          <span>{KIND_LABEL[slot.kind]}</span>
          <em>{formatHHMM(slot.start)}</em>
        </div>
        <p>
          Incluido en {slot.área}.{slot.note ? ` ${slot.note}` : ''}
        </p>
      </div>
    )
  }

  return (
    <section className="slot">
      <div className="slot-head">
        <span>{KIND_LABEL[slot.kind]}</span>
        <em>
          {formatHHMM(slot.start)}
          {slot.end && ` – ${formatHHMM(slot.end)}`} · {slot.área}
        </em>
      </div>
      {slot.note && <p className="slot-note">{slot.note}</p>}

      {top && <RestaurantCard r={top} featured checked={visited.has(top.id)} onToggle={() => visited.toggle(top.id)} />}

      {asignados.map((m) => (
        <div className="resto" key={m.id}>
          <Check checked={visited.has(m.id)} onToggle={() => visited.toggle(m.id)}>
            <strong>{m.name}</strong>
            <span className="resto-meta">Mi lista{m.note ? ` · ${m.note}` : ''}</span>
          </Check>
          <div className="ev-actions">
            <a className="btn" href={mapsWalkTo(`${m.name} ${cityById.get(m.cityId)?.name ?? ''}`)} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
        </div>
      ))}

      {(rest.length > 0 || slot.official.length > 0) && (
        <details className="fold card-fold">
          <summary>
            {rest.length > 0 ? `${rest.length === 1 ? 'Otra opción' : `Otras ${rest.length} opciones`} y las del colegio` : 'Opciones del colegio'}
          </summary>
          <div className="fold-body">
            {rest.map((r) => (
              <RestaurantCard key={r.id} r={r} checked={visited.has(r.id)} onToggle={() => visited.toggle(r.id)} />
            ))}
            {slot.official.length > 0 && <p className="meal-official">Del colegio: {slot.official.join(' · ')}</p>}
          </div>
        </details>
      )}
    </section>
  )
}

const inputStyle = {
  width: '100%', padding: 12, borderRadius: 12, border: '1px solid var(--line)', marginBottom: 10,
  fontSize: 16, background: 'transparent', color: 'inherit',
} as const

export function Food({ selected, today, onSelect }: { selected: string; today: string; onSelect: (d: string) => void }) {
  const visited = useCheckSet('comidas-visitadas')
  const [mios, setMios] = useStored<MiSitio[]>('mis-sitios', [])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', slotId: '', note: '' })

  const day = days.find((d) => d.date === selected) ?? days[0]
  const daySlots = useMemo(() => meals.filter((m) => m.date === day.date), [day.date])
  const sinAsignar = mios.filter((m) => !daySlots.some((s) => s.id === m.slotId))

  const total = useMemo(
    () => new Set([...meals.flatMap((m) => m.picks), ...mios.map((m) => m.id)]).size,
    [mios],
  )

  function addSitio(e: FormEvent) {
    e.preventDefault()
    const name = form.name.trim()
    if (!name) return
    const slot = meals.find((m) => m.id === form.slotId) ?? daySlots.find((m) => m.kind !== 'desayuno') ?? daySlots[0]
    if (!slot) return
    setMios((prev) => [
      ...prev,
      { id: `mio-${Date.now()}`, name, cityId: slot.cityId, slotId: slot.id, note: form.note.trim() },
    ])
    setForm({ name: '', slotId: '', note: '' })
    setShowForm(false)
  }

  return (
    <>
      <DayStrip selected={selected} today={today} onSelect={onSelect} />
      <DayHeader day={day} />

      {daySlots.length === 0 && <div className="empty">Ese día no tiene comidas en el cronograma.</div>}
      {daySlots.map((s) => (
        <SlotBlock key={s.id} slot={s} visited={visited} mios={mios} />
      ))}

      <h3 className="block-title">Mi lista</h3>
      <div className="card">
        <p className="muted">
          {visited.ids.length} de {total} sitios marcados como visitados. Se guarda en este teléfono.
        </p>
        <div className="progress">
          <div style={{ width: `${total ? (visited.ids.length / total) * 100 : 0}%` }} />
        </div>
        {!showForm && (
          <button className="btn solid wide" style={{ marginTop: 14 }} onClick={() => setShowForm(true)}>
            Agregar un sitio
          </button>
        )}
      </div>

      {showForm && (
        <form className="card" onSubmit={addSitio}>
          <input style={inputStyle} placeholder="Nombre del restaurante" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <select style={inputStyle} value={form.slotId} onChange={(e) => setForm({ ...form, slotId: e.target.value })}>
            <option value="">¿En qué comida cuadra?</option>
            {meals
              .filter((m) => m.kind !== 'desayuno')
              .map((m) => {
                const l = formatDayLabel(m.date)
                return (
                  <option key={m.id} value={m.id}>
                    {l.day} {l.month} · {KIND_LABEL[m.kind]} · {m.área}
                  </option>
                )
              })}
          </select>
          <input style={inputStyle} placeholder="Nota (opcional): qué quieres pedir" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          <div className="row">
            <button className="btn solid" type="submit">Guardar</button>
            <button className="btn" type="button" onClick={() => setShowForm(false)}>Cancelar</button>
          </div>
        </form>
      )}

      {sinAsignar.length > 0 && (
        <details className="fold card-fold">
          <summary>En otros días ({sinAsignar.length})</summary>
          <div className="fold-body">
            {sinAsignar.map((m) => {
              const slot = meals.find((s) => s.id === m.slotId)
              const l = slot ? formatDayLabel(slot.date) : null
              return (
                <div className="resto" key={m.id}>
                  <Check checked={visited.has(m.id)} onToggle={() => visited.toggle(m.id)}>
                    <strong>{m.name}</strong>
                    <span className="resto-meta">
                      {l && slot ? `${l.day} ${l.month} · ${KIND_LABEL[slot.kind]} · ${slot.área}` : 'sin día asignado'}
                    </span>
                  </Check>
                  <div className="ev-actions">
                    <button className="btn" onClick={() => setMios((prev) => prev.filter((x) => x.id !== m.id))}>
                      Quitar
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </details>
      )}
    </>
  )
}
