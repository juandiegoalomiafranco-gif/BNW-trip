import type { TimedEvent } from '../lib/schedule'
import { eventStatus } from '../lib/schedule'
import { formatHHMM, relativeLabel } from '../lib/time'
import { mapsWalkTo } from '../lib/maps'
import { mealById, placeById } from '../data/trip'
import { taskByEventId } from '../data/tasks'
import { BriefingBlock } from './Briefing'
import { MealInline } from './MealInline'

const KIND_LABEL: Record<string, string> = {
  vuelo: 'Vuelo',
  tren: 'Tren',
  bus: 'Bus',
  metro: 'Metro',
  caminata: 'Caminata',
  hotel: 'Hotel',
  visita: 'Visita',
  comida: 'Comida',
  charla: 'Charla',
  encuentro: 'Encuentro',
  compras: 'Compras',
  libre: 'Libre',
  otro: '',
}

export function EventCard({
  t,
  now,
  onOpenTask,
}: {
  t: TimedEvent
  now: Date
  onOpenTask?: (id: string) => void
}) {
  const { event } = t
  const status = eventStatus(t, now)
  const target = event.mapsQuery ?? event.address ?? event.location
  const briefs = (event.placeIds ?? []).map((id) => placeById.get(id)).filter(Boolean)
  const slot = event.mealId ? mealById.get(event.mealId) : undefined
  const task = taskByEventId.get(event.id)
  const soon = status === 'future' && t.startAt.getTime() - now.getTime() < 12 * 3600_000

  const classes = ['tl-item', status, event.meetingPoint ? 'meet' : '', task ? 'has-task' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} id={`ev-${event.id}`}>
      <div className="tl-time">
        {formatHHMM(event.start)}
        {event.end && <span className="end">{formatHHMM(event.end)}</span>}
      </div>
      <span className="tl-dot" />
      <article className="ev">
        <div className="ev-tags">
          {status === 'live' && <span className="tag-live">Ahora</span>}
          {event.meetingPoint ? (
            <span className="kind meet">Punto de encuentro</span>
          ) : (
            KIND_LABEL[event.kind] && <span className="kind">{KIND_LABEL[event.kind]}</span>
          )}
          {task && <span className="kind task">Tu tarea</span>}
          {soon && <span className="ev-when">{relativeLabel(t.startAt, now)}</span>}
        </div>

        <h3>{event.title}</h3>
        {(event.location || event.address) && (
          <p className="ev-where">
            {event.location}
            {event.location && event.address && <br />}
            {event.address && <span>{event.address}</span>}
          </p>
        )}
        {event.notes && <p className="ev-notes">{event.notes}</p>}

        {task && onOpenTask && (
          <button type="button" className="task-cta" onClick={() => onOpenTask(task.id)}>
            <span>
              <strong>{task.title}</strong>
              {task.mode === 'preguntar' ? 'Tus preguntas en inglés' : 'Tu guion para exponer'} · con {task.partner}
            </span>
            <span aria-hidden>→</span>
          </button>
        )}

        {slot && <MealInline slot={slot} />}

        {event.nearby && (
          <p className="ev-nearby">
            <span>A pasos</span>
            {event.nearby}
          </p>
        )}

        {target && (
          <div className="ev-actions">
            <a className="btn" href={mapsWalkTo(target)} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
        )}

        {briefs.map((p) => p && <BriefingBlock key={p.id} place={p} />)}
      </article>
    </div>
  )
}
