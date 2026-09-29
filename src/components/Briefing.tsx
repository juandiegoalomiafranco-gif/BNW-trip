import type { Place } from '../data/types'
import { mapsSearch, mapsNearbyFood } from '../lib/maps'

/** Ficha desplegable con el contexto histórico de un lugar. */
export function BriefingBlock({
  place,
  open = false,
  label,
}: {
  place: Place
  open?: boolean
  label?: string
}) {
  const b = place.briefing
  return (
    <details className="brief" open={open}>
      <summary>{label ?? place.name}</summary>
      <div className="brief-body">
        <p>{b.summary}</p>

        {b.timeline && b.timeline.length > 0 && (
          <ul>
            {b.timeline.map((t) => (
              <li key={t.year}>
                <span className="yr">{t.year}</span> — {t.text}
              </li>
            ))}
          </ul>
        )}

        {b.dontMiss && b.dontMiss.length > 0 && (
          <>
            <p style={{ marginTop: 10, fontWeight: 700 }}>Qué mirar</p>
            <ul>
              {b.dontMiss.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        )}

        {b.questions && b.questions.length > 0 && (
          <>
            <p style={{ marginTop: 10, fontWeight: 700 }}>Preguntas del logbook</p>
            <ul>
              {b.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </>
        )}

        {b.funFact && <div className="fact">{b.funFact}</div>}

        <div className="row">
          <a className="btn" href={mapsSearch(place.mapsQuery)} target="_blank" rel="noreferrer">
            Ver en Maps
          </a>
          {place.coords && (
            <a className="btn" href={mapsNearbyFood(place.coords)} target="_blank" rel="noreferrer">
              Comida cerca
            </a>
          )}
        </div>
      </div>
    </details>
  )
}
