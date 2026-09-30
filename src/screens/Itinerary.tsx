import { useEffect } from 'react'
import { days } from '../data/days'
import { eventStatus, timedDay } from '../lib/schedule'
import { useNow } from '../lib/time'
import { EventCard } from '../components/EventCard'
import { DayStrip } from '../components/DayStrip'
import { DayHeader } from '../components/DayHeader'
import { NowPanel } from '../components/NowPanel'

export function Itinerary({
  selected,
  today,
  onSelect,
  onOpenTask,
}: {
  selected: string
  today: string
  onSelect: (d: string) => void
  onOpenTask: (id: string) => void
}) {
  const now = useNow(15_000)
  const day = days.find((d) => d.date === selected) ?? days[0]
  const items = timedDay(day)
  const isToday = day.date === today && items.some((t) => eventStatus(t, now) !== 'past')

  // Al abrir el día de hoy, bajar hasta lo que está pasando (o lo siguiente).
  const focusId = isToday
    ? (items.find((t) => eventStatus(t, now) === 'live') ?? items.find((t) => eventStatus(t, now) === 'future'))?.event.id
    : undefined

  useEffect(() => {
    if (!focusId) return
    const el = document.getElementById(`ev-${focusId}`)
    el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    // Solo al cambiar de día: no perseguir al usuario mientras lee.
  }, [day.date])

  return (
    <>
      <DayStrip selected={selected} today={today} onSelect={onSelect} />
      {isToday && <NowPanel now={now} onOpenTask={onOpenTask} />}
      <DayHeader day={day} />

      <div className="tl">
        {items.map((t) => (
          <EventCard key={t.event.id} t={t} now={now} onOpenTask={onOpenTask} />
        ))}
      </div>
    </>
  )
}
