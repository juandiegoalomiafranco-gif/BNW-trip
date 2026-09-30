import { trip } from '../data/trip'
import { taskByEventId } from '../data/tasks'
import { currentAndNext, tripHasStarted } from '../lib/schedule'
import { formatClock, formatHHMM, relativeLabel } from '../lib/time'

/** Qué hora es en el destino, qué toca ahora y qué sigue. */
export function NowPanel({ now, onOpenTask }: { now: Date; onOpenTask?: (id: string) => void }) {
  const { current, next } = currentAndNext(now)
  const started = tripHasStarted(now)

  const progress =
    current && current.endAt
      ? Math.min(1, Math.max(0, (now.getTime() - current.startAt.getTime()) / (current.endAt.getTime() - current.startAt.getTime())))
      : null

  const focus = current ?? next
  const task = focus ? taskByEventId.get(focus.event.id) : undefined

  return (
    <section className="now" aria-live="polite">
      <div className="now-top">
        <span className="now-label">{current ? 'Ahora' : started ? 'Lo que sigue' : 'Falta para salir'}</span>
        <span className="now-clock">{formatClock(now, trip.timezone)}</span>
      </div>

      {focus ? (
        <>
          <h2>{focus.event.title}</h2>
          <div className="now-meta">
            {formatHHMM(focus.event.start)}
            {focus.event.end ? ` – ${formatHHMM(focus.event.end)}` : ''}
            {focus.event.location ? ` · ${focus.event.location}` : ''}
          </div>
          {progress !== null && current?.endAt && (
            <div className="now-progress">
              <div className="now-bar">
                <div style={{ width: `${progress * 100}%` }} />
              </div>
              <span>Termina {relativeLabel(current.endAt, now)}</span>
            </div>
          )}
          {!current && next && <div className="now-meta strong">Empieza {relativeLabel(next.startAt, now)}</div>}
          {task && onOpenTask && (
            <button type="button" className="now-task" onClick={() => onOpenTask(task.id)}>
              Aquí te toca tu tarea: {task.title} →
            </button>
          )}
        </>
      ) : (
        <h2>Viaje terminado</h2>
      )}

      {current && next && (
        <div className="now-next">
          <span>Después</span>
          <strong>{next.event.title}</strong>
          <em>
            {formatHHMM(next.event.start)} · {relativeLabel(next.startAt, now)}
          </em>
        </div>
      )}
    </section>
  )
}
