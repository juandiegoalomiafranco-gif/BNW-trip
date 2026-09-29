import { days } from '../data/days'
import { cityById } from '../data/trip'
import { timedDay } from '../lib/schedule'
import { formatLongDate, useNow } from '../lib/time'
import { EventCard } from '../components/EventCard'
import { DayStrip } from '../components/DayStrip'

export function Itinerary({
  selected,
  today,
  onSelect,
}: {
  selected: string
  today: string
  onSelect: (d: string) => void
}) {
  const now = useNow(30_000)
  const day = days.find((d) => d.date === selected) ?? days[0]
  const city = cityById.get(day.cityId)

  return (
    <>
      <DayStrip selected={selected} today={today} onSelect={onSelect} />

      <div className="card">
        <span className="kind">{day.label}</span>
        <h3>{day.title}</h3>
        <p className="muted" style={{ marginTop: 2 }}>
          {formatLongDate(day.date)} · {city?.name}
        </p>
        {day.summary && <p style={{ marginTop: 8 }}>{day.summary}</p>}
        {day.hotel && <p className="muted" style={{ marginTop: 6 }}>Se duerme en {day.hotel}</p>}
      </div>

      <div className="tl">
        {timedDay(day).map((t) => (
          <EventCard key={t.event.id} t={t} now={now} />
        ))}
      </div>
    </>
  )
}
