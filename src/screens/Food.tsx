import { useMemo, useState, type FormEvent } from 'react'
import { days } from '../data/days'
import { meals } from '../data/meals'
import { cityById, restaurantById } from '../data/trip'
import type { CityId, MealSlot, Restaurant } from '../data/types'
import { formatHHMM, formatDayLabel } from '../lib/time'
import { mapsWalkTo } from '../lib/maps'
import { useCheckSet, useStored } from '../lib/storage'
import { Check } from '../components/Check'

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
}: {
  r: Restaurant
  checked: boolean
  onToggle: () => void
}) {
  return (
    <div className="card">
      <Check checked={checked} onToggle={onToggle}>
        <strong>{r.name}</strong>
        <span className={`tag ${r.source}`}>{r.source === 'oficial' ? 'en el logbook' : 'sugerencia'}</span>
        <div className="muted" style={{ marginTop: 3 }}>
          {r.cuisine} · <span className="price">{r.price}</span>
          {r.walkMin !== undefined && ` · ${r.walkMin === 0 ? 'ahí mismo' : `${r.walkMin} min a pie`}`}
        </div>
      </Check>

      {r.why && <p style={{ marginTop: 8 }}>{r.why}</p>}
      {r.mustTry.length > 0 && (
        <p className="muted" style={{ marginTop: 6 }}>
          Pedir: {r.mustTry.join(' · ')}
        </p>
      )}
      {r.heads && <div className="heads">Ojo: {r.heads}</div>}
      <div className="row">
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
  const asignados = mios.filter((m) => m.slotId === slot.id)

  return (
    <div style={{ marginBottom: 20 }}>
      <div className="section-title" style={{ marginBottom: 6 }}>
        {KIND_LABEL[slot.kind]} · {formatHHMM(slot.start)}
        {slot.end && ` – ${formatHHMM(slot.end)}`} · {slot.área}
      </div>

      {slot.note && (
        <div className="card">
          <p>{slot.note}</p>
        </div>
      )}

      {slot.official.length > 0 && (
        <div className="card">
          <h3>Opciones del colegio</h3>
          <p style={{ marginTop: 4 }}>{slot.official.join(' · ')}</p>
        </div>
      )}

      {picks.map((r) => (
        <RestaurantCard key={r.id} r={r} checked={visited.has(r.id)} onToggle={() => visited.toggle(r.id)} />
      ))}

      {asignados.map((m) => (
        <div className="card" key={m.id}>
          <Check checked={visited.has(m.id)} onToggle={() => visited.toggle(m.id)}>
            <strong>{m.name}</strong>
            <span className="tag mia">mi lista</span>
            {m.note && <div className="muted" style={{ marginTop: 3 }}>{m.note}</div>}
          </Check>
          <div className="row">
            <a className="btn" href={mapsWalkTo(`${m.name} ${cityById.get(m.cityId)?.name ?? ''}`)} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Food({ selected, onSelect }: { selected: string; onSelect: (d: string) => void }) {
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
  const done = visited.ids.length

  function addSitio(e: FormEvent) {
    e.preventDefault()
    const name = form.name.trim()
    if (!name) return
    const slot = meals.find((m) => m.id === form.slotId) ?? daySlots[0]
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
      <div className="card">
        <h3>Comidas marcadas</h3>
        <p className="muted" style={{ marginTop: 2 }}>
          {done} de {total} sitios de la lista
        </p>
        <div className="progress">
          <div style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
        </div>
      </div>

      <div className="chips" style={{ marginTop: 12 }}>
        {days.map((d) => {
          const l = formatDayLabel(d.date)
          return (
            <button
              key={d.date}
              type="button"
              className="chip"
              aria-pressed={d.date === selected}
              onClick={() => onSelect(d.date)}
            >
              {l.day} {l.month}
            </button>
          )
        })}
      </div>

      <div className="card">
        <span className="kind">{day.label}</span>
        <h3>{day.title}</h3>
        <p className="muted" style={{ marginTop: 2 }}>{cityById.get(day.cityId)?.name}</p>
      </div>

      {daySlots.length === 0 && <div className="empty">Ese día no tiene comidas en el cronograma.</div>}
      {daySlots.map((s) => (
        <SlotBlock key={s.id} slot={s} visited={visited} mios={mios} />
      ))}

      <div className="section-title">Mi lista (sí o sí)</div>
      {!showForm && (
        <button className="btn solid" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setShowForm(true)}>
          Agregar un sitio
        </button>
      )}
      {showForm && (
        <form className="card" onSubmit={addSitio}>
          <input
            className="gate-input"
            style={{ width: '100%', padding: 11, borderRadius: 11, border: '1px solid var(--line)', marginBottom: 8, fontSize: 16, background: 'transparent', color: 'inherit' }}
            placeholder="Nombre del restaurante"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <select
            style={{ width: '100%', padding: 11, borderRadius: 11, border: '1px solid var(--line)', marginBottom: 8, fontSize: 16, background: 'transparent', color: 'inherit' }}
            value={form.slotId}
            onChange={(e) => setForm({ ...form, slotId: e.target.value })}
          >
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
          <input
            style={{ width: '100%', padding: 11, borderRadius: 11, border: '1px solid var(--line)', marginBottom: 8, fontSize: 16, background: 'transparent', color: 'inherit' }}
            placeholder="Nota (opcional): qué quieres pedir"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
          <div className="row">
            <button className="btn solid" type="submit">Guardar</button>
            <button className="btn" type="button" onClick={() => setShowForm(false)}>Cancelar</button>
          </div>
        </form>
      )}

      {sinAsignar.length > 0 && (
        <>
          <div className="section-title">En otros días</div>
          {sinAsignar.map((m) => {
            const slot = meals.find((s) => s.id === m.slotId)
            const l = slot ? formatDayLabel(slot.date) : null
            return (
              <div className="card" key={m.id}>
                <Check checked={visited.has(m.id)} onToggle={() => visited.toggle(m.id)}>
                  <strong>{m.name}</strong>
                  <div className="muted" style={{ marginTop: 3 }}>
                    {l && slot ? `${l.day} ${l.month} · ${KIND_LABEL[slot.kind]} · ${slot.área}` : 'sin día asignado'}
                  </div>
                </Check>
                <div className="row">
                  <button className="btn" onClick={() => setMios((prev) => prev.filter((x) => x.id !== m.id))}>
                    Quitar
                  </button>
                </div>
              </div>
            )
          })}
        </>
      )}
    </>
  )
}
