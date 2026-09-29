import { days } from '../data/days'
import { trip } from '../data/trip'
import type { Day, TripEvent } from '../data/types'
import { todayInTz, zonedToDate } from './time'

export interface TimedEvent {
  event: TripEvent
  day: Day
  startAt: Date
  endAt: Date | null
}

export function timeEvent(day: Day, event: TripEvent): TimedEvent {
  const tz = event.tz ?? trip.timezone
  const startAt = zonedToDate(day.date, event.start, tz)
  let endAt = event.end ? zonedToDate(day.date, event.end, tz) : null
  // Un evento que "termina" antes de empezar cruza la medianoche o cambia de zona.
  if (endAt && endAt.getTime() < startAt.getTime()) endAt = new Date(startAt.getTime() + 60 * 60 * 1000)
  return { event, day, startAt, endAt }
}

export function timedDay(day: Day): TimedEvent[] {
  return day.events.map((e) => timeEvent(day, e)).sort((a, b) => a.startAt.getTime() - b.startAt.getTime())
}

const allTimed: TimedEvent[] = days
  .flatMap((d) => d.events.map((e) => timeEvent(d, e)))
  .sort((a, b) => a.startAt.getTime() - b.startAt.getTime())

export function eventStatus(t: TimedEvent, now: Date): 'past' | 'live' | 'future' {
  const end = t.endAt ?? new Date(t.startAt.getTime() + 30 * 60 * 1000)
  if (now >= t.startAt && now < end) return 'live'
  return now >= end ? 'past' : 'future'
}

/** Que esta pasando ahora y que sigue, en todo el viaje. */
export function currentAndNext(now: Date): { current: TimedEvent | null; next: TimedEvent | null } {
  let current: TimedEvent | null = null
  for (const t of allTimed) {
    if (eventStatus(t, now) === 'live') current = t
  }
  const next = allTimed.find((t) => t.startAt > now) ?? null
  return { current, next }
}

/** El día del viaje que corresponde a hoy; si el viaje no ha empezado, el primero. */
export function activeDate(now = new Date()): string {
  const today = todayInTz(trip.timezone, now)
  if (days.some((d) => d.date === today)) return today
  return today < trip.startDate ? trip.startDate : trip.endDate
}

export function tripHasStarted(now = new Date()): boolean {
  return todayInTz(trip.timezone, now) >= trip.startDate
}
