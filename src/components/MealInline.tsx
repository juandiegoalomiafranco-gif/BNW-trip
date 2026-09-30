import type { MealSlot, Restaurant } from '../data/types'
import { restaurantById } from '../data/trip'
import { mapsWalkTo } from '../lib/maps'

const KIND: Record<string, string> = {
  desayuno: 'Desayuno',
  almuerzo: 'Dónde almorzar',
  cena: 'Dónde cenar',
  snack: 'Para picar',
}

export function walkLabel(r: Restaurant): string {
  if (r.walkMin === undefined) return ''
  return r.walkMin === 0 ? 'ahí mismo' : `${r.walkMin} min a pie`
}

/** La recomendación de comida metida dentro del evento del itinerario. */
export function MealInline({ slot }: { slot: MealSlot }) {
  if (slot.kind === 'desayuno') {
    return <p className="ev-line">🍳 Desayuno incluido en el hotel.</p>
  }

  const picks = slot.picks.map((id) => restaurantById.get(id)).filter(Boolean) as Restaurant[]
  const [top, ...rest] = picks

  return (
    <div className="meal">
      <div className="meal-label">{KIND[slot.kind]}</div>
      {!top && <p>{slot.note ?? slot.official.join(' · ')}</p>}
      {top && (
        <>
          <div className="meal-top">
            <div>
              <strong>{top.name}</strong>
              <span className="meal-meta">
                {top.cuisine} · {top.price}
                {walkLabel(top) && ` · ${walkLabel(top)}`}
              </span>
            </div>
            <a className="btn small" href={mapsWalkTo(top.mapsQuery)} target="_blank" rel="noreferrer">
              Ir
            </a>
          </div>
          {top.mustTry.length > 0 && <p className="meal-try">Pedir: {top.mustTry.join(' · ')}</p>}
          {top.heads && <p className="meal-heads">Ojo: {top.heads}</p>}

          {(rest.length > 0 || slot.official.length > 0) && (
            <details className="fold">
              <summary>
                {rest.length === 0 ? 'Opciones del colegio' : rest.length === 1 ? 'Otra opción cerca' : `Otras ${rest.length} opciones cerca`}
              </summary>
              <ul className="meal-list">
                {rest.map((r) => (
                  <li key={r.id}>
                    <a href={mapsWalkTo(r.mapsQuery)} target="_blank" rel="noreferrer">
                      {r.name}
                    </a>
                    <span>
                      {r.cuisine} · {r.price}
                      {walkLabel(r) && ` · ${walkLabel(r)}`}
                    </span>
                  </li>
                ))}
              </ul>
              {slot.official.length > 0 && (
                <p className="meal-official">Del colegio: {slot.official.join(' · ')}</p>
              )}
            </details>
          )}
        </>
      )}
    </div>
  )
}
