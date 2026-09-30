import { days } from '../data/days'
import { tasks } from '../data/tasks'
import { eventStatus, timedDay, timeEvent } from '../lib/schedule'
import { formatHHMM, useNow } from '../lib/time'
import { EventCard } from '../components/EventCard'
import { NowPanel } from '../components/NowPanel'
import { DayHeader } from '../components/DayHeader'

export function Today({
  date,
  onGoToDay,
  onOpenTask,
}: {
  date: string
  onGoToDay: (d: string) => void
  onOpenTask: (id: string) => void
}) {
  const now = useNow(15_000)
  const day = days.find((d) => d.date === date) ?? days[0]
  const items = timedDay(day)

  const upcoming = items.filter((t) => eventStatus(t, now) !== 'past')
  const shown = upcoming.length > 0 ? upcoming : items

  const todaysTasks = tasks
    .filter((t) => t.date === day.date)
    .map((t) => {
      const ev = day.events.find((e) => e.id === t.eventIds[0])
      return { task: t, at: ev ? timeEvent(day, ev) : null }
    })
    .filter(({ at }) => !at || eventStatus(at, now) !== 'past')

  return (
    <>
      <NowPanel now={now} onOpenTask={onOpenTask} />

      {todaysTasks.map(({ task, at }) => (
        <button key={task.id} type="button" className="task-banner" onClick={() => onOpenTask(task.id)}>
          <span className="task-banner-kicker">Hoy te toca{at ? ` · ${formatHHMM(at.event.start)}` : ''}</span>
          <strong>{task.title}</strong>
          <span>{task.mode === 'preguntar' ? 'Repasa tus preguntas en inglés' : 'Repasa tu guion'} →</span>
        </button>
      ))}

      <DayHeader day={day} />

      <div className="tl">
        {shown.map((t) => (
          <EventCard key={t.event.id} t={t} now={now} onOpenTask={onOpenTask} />
        ))}
      </div>

      {upcoming.length > 0 && upcoming.length < items.length && (
        <button className="btn wide" onClick={() => onGoToDay(day.date)}>
          Ver el día completo
        </button>
      )}
    </>
  )
}
