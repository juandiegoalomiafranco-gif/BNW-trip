import { useMemo, useState } from 'react'
import { places } from '../data/places'
import { trip } from '../data/trip'
import type { CityId } from '../data/types'
import { BriefingBlock } from '../components/Briefing'

const CITY_ORDER: CityId[] = ['boston', 'nyc', 'dc']

export function Places() {
  const [city, setCity] = useState<CityId>('boston')
  const [q, setQ] = useState('')

  const list = useMemo(() => {
    const text = q.trim().toLowerCase()
    return places.filter((p) => {
      if (text) return p.name.toLowerCase().includes(text) || p.briefing.summary.toLowerCase().includes(text)
      return p.cityId === city
    })
  }, [city, q])

  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar un lugar…"
        style={{
          width: '100%', padding: 12, fontSize: 16, borderRadius: 13,
          border: '1px solid var(--line)', background: 'var(--card)', color: 'inherit', marginBottom: 12,
        }}
      />

      {!q && (
        <div className="chips">
          {CITY_ORDER.map((id) => {
            const c = trip.cities.find((x) => x.id === id)!
            return (
              <button key={id} type="button" className="chip" aria-pressed={city === id} onClick={() => setCity(id)}>
                {c.name}
              </button>
            )
          })}
        </div>
      )}

      {!q && (
        <div className="card">
          <p>{trip.cities.find((c) => c.id === city)?.blurb}</p>
        </div>
      )}

      {list.length === 0 && <div className="empty">No hay nada con ese nombre.</div>}

      {list.map((p) => (
        <div className="card" key={p.id}>
          <span className="kind">{p.category}</span>
          <h3>{p.name}</h3>
          {p.address && <p className="muted" style={{ marginTop: 2 }}>{p.address}</p>}
          <BriefingBlock place={p} label="Briefing" />
        </div>
      ))}
    </>
  )
}
