import type { TimedEvent } from '../lib/schedule'
import { eventStatus } from '../lib/schedule'
import { formatHHMM, relativeLabel } from '../lib/time'
import { mapsWalkTo } from '../lib/maps'
import { placeById } from '../data/trip'
import { BriefingBlock } from './Briefing'

const KIND_LABEL: Record<string, string> = {
  vuelo: 'vuelo',
  tren: 'tren',
  bus: 'bus',
  metro: 'metro',
  caminata: 'caminata',
  hotel: 'hotel',
  visita: 'visita',
  comida: 'comida',
  charla: 'charla',
  encuentro: 'encuentro',
  compras: 'compras',
  libre: 'libre',
  otro: '',
}

export function EventCard({ t, now }: { t: TimedEvent; now: Date }) {
  const { event } = t
  const status = eventStatus(t, now)
  const target = event.mapsQuery ?? event.address ?? event.location
  const briefs = (event.placeIds ?? []).map((id) => placeById.get(id)).filter(Boolean)

  return (
    <div className={`tl-item ${status}`}>
      <div className="tl-time">
        {formatHHMM(event.start)}
        {event.end && <span className="end">{formatHHMM(event.end)}</span>}
      </div>
      <span className="tl-dot" />
      <div className="card">
        {event.meetingPoint ? (
          <span className="kind meet">punto de encuentro</span>
        ) : (
          KIND_LABEL[event.kind] && <span className="kind">{KIND_LABEL[event.kind]}</span>
        )}
        <h3>{event.title}</h3>
        {event.location && <p>{event.location}</p>}
        {event.address && <p className="muted">{event.address}</p>}
        {event.notes && <p style={{ marginTop: 6 }}>{event.notes}</p>}
        {status === 'future' && t.startAt.getTime() - now.getTime() < 12 * 3600_000 && (
          <p className="muted" style={{ marginTop: 6 }}>
            {relativeLabel(t.startAt, now)}
          </p>
        )}

        {target && (
          <div className="row">
            <a className="btn" href={mapsWalkTo(target)} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
        )}

        {briefs.map((p) => p && <BriefingBlock key={p.id} place={p} />)}
      </div>
    </div>
  )
}
