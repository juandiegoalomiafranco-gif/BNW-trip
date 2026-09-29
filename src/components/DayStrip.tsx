import { useEffect, useRef } from 'react'
import { days } from '../data/days'
import { formatDayLabel } from '../lib/time'

export function DayStrip({
  selected,
  today,
  onSelect,
}: {
  selected: string
  today: string
  onSelect: (date: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current?.querySelector<HTMLElement>('[aria-pressed="true"]')
    el?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [selected])

  return (
    <div className="daystrip" ref={ref}>
      {days.map((d) => {
        const l = formatDayLabel(d.date)
        return (
          <button
            key={d.date}
            type="button"
            className={`pill${d.date === today ? ' today' : ''}`}
            aria-pressed={d.date === selected}
            onClick={() => onSelect(d.date)}
          >
            <div className="d">{l.day}</div>
            <div className="m">{l.month}</div>
          </button>
        )
      })}
    </div>
  )
}
