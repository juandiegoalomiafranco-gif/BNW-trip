import { days } from '../data/days'
import { cityById } from '../data/trip'
import { currentAndNext, timedDay, tripHasStarted } from '../lib/schedule'
import { formatHHMM, formatLongDate, relativeLabel, useNow } from '../lib/time'
import { EventCard } from '../components/EventCard'

export function Today({ date, onGoToDay }: { date: string; onGoToDay: (d: string) => void }) {
  const now = useNow(15_000)
  const day = days.find((d) => d.date === date) ?? days[0]
  const items = timedDay(day)
  const { current, next } = currentAndNext(now)
  const started = tripHasStarted(now)
  const city = cityById.get(day.cityId)

  const upcoming = items.filter((t) => !t.endAt || t.endAt > now)
  const shown = upcoming.length > 0 ? upcoming : items

  return (
    <>
      <div className="card now">
        <div className="label">
          {current ? 'Ahora mismo' : started ? 'Lo que sigue' : 'Falta para salir'}
        </div>
        <h2>{current?.event.title ?? next?.event.title ?? 'Viaje terminado'}</h2>
        {(current ?? next) && (
          <div className="meta">
            {formatHHMM((current ?? next)!.event.start)}
            {(current ?? next)!.event.location ? ` · ${(current ?? next)!.event.location}` : ''}
            {!current && next ? ` · ${relativeLabel(next.startAt, now)}` : ''}
          </div>
        )}
        {current && next && (
          <div className="next">
            Después: <strong>{next.event.title}</strong> a las {formatHHMM(next.event.start)}
          </div>
        )}
        {!started && next && (
          <div className="next">
            El viaje arranca el 30 de septiembre en el aeropuerto de Cali.
          </div>
        )}
      </div>

      <div className="section-title">
        {day.label} · {formatLongDate(day.date)} · {city?.name}
      </div>
      {day.summary && (
        <div className="card">
          <p>{day.summary}</p>
          {day.hotel && <p className="muted" style={{ marginTop: 6 }}>Se duerme en {day.hotel}</p>}
        </div>
      )}

      <div className="tl">
        {shown.map((t) => (
          <EventCard key={t.event.id} t={t} now={now} />
        ))}
      </div>

      {upcoming.length > 0 && upcoming.length < items.length && (
        <button className="btn" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onGoToDay(day.date)}>
          Ver el día completo
        </button>
      )}
    </>
  )
}
