import type { City, Trip } from './types'
import { days } from './days'
import { meals } from './meals'
import { restaurants } from './restaurants'
import { places } from './places'

const cities: City[] = [
  { id: 'boston', name: 'Boston', timezone: 'America/New_York', accent: '#2f9e68', blurb: 'Donde empezó la independencia de Estados Unidos. Chica, caminable y universitaria.' },
  { id: 'nyc', name: 'New York', timezone: 'America/New_York', accent: '#3b7dc4', blurb: 'Manhattan, Harlem y Brooklyn. Todo se mueve en metro.' },
  { id: 'dc', name: 'Washington', timezone: 'America/New_York', accent: '#b8743a', blurb: 'La capital: monumentos, instituciones y los museos Smithsonian, que son gratis.' },
  { id: 'tránsito', name: 'En tránsito', timezone: 'America/New_York', accent: '#64748b', blurb: 'Días de vuelo o de tren entre ciudades.' },
]

export const trip: Trip = {
  name: 'BNW Trip',
  subtitle: 'Boston · New York · Washington',
  timezone: 'America/New_York',
  homeTimezone: 'America/Bogota',
  homeLabel: 'Cali',
  startDate: '2026-09-30',
  endDate: '2026-10-09',
  cities,
  days,
  meals,
  restaurants,
  places,
}

export { days, meals, restaurants, places }

// --------- indices utiles ---------
export const dayByDate = new Map(days.map((d) => [d.date, d]))
export const mealById = new Map(meals.map((m) => [m.id, m]))
export const restaurantById = new Map(restaurants.map((r) => [r.id, r]))
export const placeById = new Map(places.map((p) => [p.id, p]))
export const cityById = new Map(cities.map((c) => [c.id, c]))
