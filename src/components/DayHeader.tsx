import type { Day } from '../data/types'
import { cityById } from '../data/trip'
import { formatLongDate } from '../lib/time'

/** Encabezado de un día: número, título, fecha, ciudad y hotel. */
export function DayHeader({ day }: { day: Day }) {
  const city = cityById.get(day.cityId)
  return (
    <header className="day-head">
      <div className="day-kicker">
        {day.label} · {formatLongDate(day.date)} · {city?.name}
      </div>
      <h2>{day.title}</h2>
      {day.summary && <p>{day.summary}</p>}
      {day.hotel && <p className="day-hotel">Noche en {day.hotel}</p>}
    </header>
  )
}
