import { deviceTimezone, formatClock, hoursBetween, useNow } from '../lib/time'
import { trip } from '../data/trip'

/** Reloj del destino. Si el teléfono está en otra zona, muestra también la de casa. */
export function Clock() {
  const now = useNow(10_000)
  const device = deviceTimezone()
  const diff = hoursBetween(trip.timezone, device, now)
  const alreadyThere = Math.abs(hoursBetween(device, trip.timezone, now)) < 0.01

  return (
    <div className="clock">
      <div className="big">{formatClock(now, trip.timezone)}</div>
      <div className="small">
        {alreadyThere ? (
          <>
            hora local · {trip.homeLabel} {formatClock(now, trip.homeTimezone)}
          </>
        ) : (
          <>
            allá · aquí {formatClock(now, device)}
            {diff !== 0 && ` (${diff > 0 ? '+' : ''}${diff}h)`}
          </>
        )}
      </div>
    </div>
  )
}
