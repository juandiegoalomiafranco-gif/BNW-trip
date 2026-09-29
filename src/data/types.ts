/** Tipos de datos del viaje. Los datos están en days.ts / meals.ts / restaurants.ts / places.ts */

export type CityId = 'boston' | 'nyc' | 'dc' | 'tránsito'

export interface City {
  id: CityId
  name: string
  timezone: string
  accent: string
  blurb: string
}

export type EventKind =
  | 'vuelo'
  | 'tren'
  | 'bus'
  | 'metro'
  | 'caminata'
  | 'hotel'
  | 'visita'
  | 'comida'
  | 'charla'
  | 'encuentro'
  | 'compras'
  | 'libre'
  | 'otro'

export interface TripEvent {
  id: string
  /** Hora de reloj local, "HH:MM" en 24h. */
  start: string
  end?: string
  title: string
  kind: EventKind
  location?: string
  address?: string
  notes?: string
  /** Zona horaria de esta hora. Si falta, se usa la del día. */
  tz?: string
  /** Ids de lugares con briefing que se ven en este evento. */
  placeIds?: string[]
  /** Id de la franja de comida asociada. */
  mealId?: string
  mapsQuery?: string
  /** Punto de encuentro obligatorio del colegio. */
  meetingPoint?: boolean
}

export interface Day {
  /** YYYY-MM-DD, también es el id. */
  date: string
  /** "Día 1", como lo numera el logbook. */
  label: string
  cityId: CityId
  title: string
  summary?: string
  /** Hotel donde se duerme esa noche. */
  hotel?: string
  events: TripEvent[]
}

export type MealKind = 'desayuno' | 'almuerzo' | 'cena' | 'snack'

export interface MealSlot {
  id: string
  /** Fecha del día al que pertenece. */
  date: string
  kind: MealKind
  start: string
  end?: string
  cityId: CityId
  /** Zona donde caemos a esa hora: "Quincy Market", "Columbus Circle". */
  área: string
  /** Opciones que ya trae el logbook del colegio. */
  official: string[]
  /** Ids de restaurantes recomendados para esta franja. */
  picks: string[]
  note?: string
}

export type PriceLevel = '$' | '$$' | '$$$' | '$$$$'

export interface Restaurant {
  id: string
  name: string
  cityId: CityId
  área: string
  cuisine: string
  price: PriceLevel
  mustTry: string[]
  address?: string
  mapsQuery: string
  /** Minutos a pie desde el punto del cronograma de su mejor franja. */
  walkMin?: number
  /** Id de la franja de comida donde mejor encaja. */
  bestSlot?: string
  /** Por que encaja ahi. */
  why?: string
  /** Advertencias: fila, reserva, horario. */
  heads?: string
  /** 'oficial' viene en el logbook; 'extra' es recomendación; 'mia' la agrega el usuario. */
  source: 'oficial' | 'extra' | 'mia'
}

export type PlaceCategory =
  | 'histórico'
  | 'museo'
  | 'monumento'
  | 'universidad'
  | 'barrio'
  | 'mirador'
  | 'parque'
  | 'institución'
  | 'otro'

export interface Briefing {
  summary: string
  timeline?: { year: string; text: string }[]
  dontMiss?: string[]
  funFact?: string
  /** Preguntas de reflexión que pide el logbook. */
  questions?: string[]
}

export interface Place {
  id: string
  name: string
  cityId: CityId
  category: PlaceCategory
  address?: string
  mapsQuery: string
  coords?: { lat: number; lng: number }
  briefing: Briefing
}

export interface ChecklistItem {
  id: string
  text: string
  group: string
}

export interface Trip {
  name: string
  subtitle: string
  timezone: string
  homeTimezone: string
  homeLabel: string
  startDate: string
  endDate: string
  cities: City[]
  days: Day[]
  meals: MealSlot[]
  restaurants: Restaurant[]
  places: Place[]
  packing: ChecklistItem[]
}
