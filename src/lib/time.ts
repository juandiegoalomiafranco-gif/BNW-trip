import { useEffect, useState } from 'react'

/** Diferencia entre la hora de `tz` y UTC, en milisegundos, para un instante dado. */
function tzOffsetMs(date: Date, tz: string): number {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const parts = dtf.formatToParts(date)
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value)
  const asUTC = Date.UTC(
    get('year'),
    get('month') - 1,
    get('day'),
    get('hour') % 24,
    get('minute'),
    get('second'),
  )
  return asUTC - date.getTime()
}

/**
 * Convierte una hora "de reloj de pared" en una zona horaria a un Date real.
 * Ej: zonedToDate('2026-10-01', '09:30', 'America/New_York')
 */
export function zonedToDate(dateISO: string, hhmm: string, tz: string): Date {
  const [y, m, d] = dateISO.split('-').map(Number)
  const [hh, mm] = hhmm.split(':').map(Number)
  const guess = Date.UTC(y, m - 1, d, hh, mm)
  // Dos pasadas para resolver bien los bordes de cambió de horario.
  let ts = guess - tzOffsetMs(new Date(guess), tz)
  ts = guess - tzOffsetMs(new Date(ts), tz)
  return new Date(ts)
}

/** La fecha YYYY-MM-DD que es "hoy" en esa zona horaria. */
export function todayInTz(tz: string, now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

export function formatClock(date: Date, tz: string): string {
  return new Intl.DateTimeFormat('es-CO', {
    timeZone: tz,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
    .format(date)
    .replace(/\s?([ap])\.?\s?m\.?/i, (_, p: string) => ` ${p.toUpperCase()}M`)
}

export function formatHHMM(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

export function formatDayLabel(dateISO: string): { weekday: string; day: string; month: string } {
  const d = new Date(`${dateISO}T12:00:00Z`)
  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('es-CO', { timeZone: 'UTC', ...opts }).format(d)
  return {
    weekday: fmt({ weekday: 'short' }).replace('.', ''),
    day: fmt({ day: 'numeric' }),
    month: fmt({ month: 'short' }).replace('.', ''),
  }
}

export function formatLongDate(dateISO: string): string {
  const d = new Date(`${dateISO}T12:00:00Z`)
  return new Intl.DateTimeFormat('es-CO', {
    timeZone: 'UTC',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(d)
}

/** Nombre corto de la zona horaria del dispositivo, ej. "America/Bogota". */
export function deviceTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

/** Diferencia en horas entre dos zonas horarias en este momento. */
export function hoursBetween(tzA: string, tzB: string, now = new Date()): number {
  return (tzOffsetMs(now, tzA) - tzOffsetMs(now, tzB)) / 3_600_000
}

/** Reloj que se actualiza solo. `everyMs` por defecto: cada 15 segundos. */
export function useNow(everyMs = 15_000): Date {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), everyMs)
    const onVisible = () => document.visibilityState === 'visible' && setNow(new Date())
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [everyMs])
  return now
}

export type EventStatus = 'pasado' | 'ahora' | 'próximo' | 'futuro'

/** Cuanto falta (o cuanto lleva) en texto corto: "en 25 min", "hace 2 h". */
export function relativeLabel(target: Date, now: Date): string {
  const diffMin = Math.round((target.getTime() - now.getTime()) / 60_000)
  const abs = Math.abs(diffMin)
  const unit = abs < 60 ? `${abs} min` : abs < 1440 ? `${Math.round(abs / 60)} h` : `${Math.round(abs / 1440)} d`
  if (diffMin === 0) return 'ahora'
  return diffMin > 0 ? `en ${unit}` : `hace ${unit}`
}
