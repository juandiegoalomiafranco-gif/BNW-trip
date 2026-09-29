import type { ChecklistItem, City, Trip } from './types'
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

/** Lista de equipaje tomada de las recomendaciones del logbook. */
const packing: ChecklistItem[] = [
  { id: 'p-pasaporte', group: 'Documentos', text: 'Pasaporte vigente y visa de EE.UU. (o ESTA)' },
  { id: 'p-cedula', group: 'Documentos', text: 'Menores de 18: tarjeta de identidad y registro civil actualizado' },
  { id: 'p-autorización', group: 'Documentos', text: 'Autorización notariada de ambos padres, con fechas de salida y regreso, autorizando viajar con Nelson Guzmán Victoria (C.C. 16.770.851)' },
  { id: 'p-carné', group: 'Documentos', text: 'Carne estudiantil vigente' },
  { id: 'p-fotocopias', group: 'Documentos', text: 'Fotocopias del pasaporte y la visa dentro del JAWS' },
  { id: 'p-zapatos', group: 'Ropa', text: 'Maximo dos pares de zapatos comodos para caminar y un par de sandalias' },
  { id: 'p-medias', group: 'Ropa', text: 'Minimo cuatro pares de medias (se pueden mojar con la lluvia)' },
  { id: 'p-chaqueta', group: 'Ropa', text: 'Chaqueta abrigada para el frio' },
  { id: 'p-impermeable', group: 'Ropa', text: 'Chaqueta impermeable y, si quiere, sombrilla pequeña y bufanda' },
  { id: 'p-pantalon', group: 'Ropa', text: 'Pantalon largo para las visitas a los campus universitarios' },
  { id: 'p-ropa10', group: 'Ropa', text: 'Ropa comoda para 10 días' },
  { id: 'p-gafas', group: 'Ropa', text: 'Gafas de sol, gorra o sombrero y bloqueador' },
  { id: 'p-jaws', group: 'Equipaje', text: 'Morral JAWS de 30 a 40 litros para el día a día' },
  { id: 'p-botella', group: 'Equipaje', text: 'Botella de agua' },
  { id: 'p-maleta', group: 'Equipaje', text: 'Maleta de 23 kg con ruedas (o mochila de camping de 60 L)' },
  { id: 'p-aseo', group: 'Salud', text: 'Cepillo, crema dental, shampoo, desodorante y aseo personal' },
  { id: 'p-botiquin', group: 'Salud', text: 'Botiquin: dolor de estomago, gastritis, dolor de cabeza, fiebre, gripa, irritacion en la piel' },
  { id: 'p-formula', group: 'Salud', text: 'Medicamentos formulados o especializados que necesite' },
  { id: 'p-snacks', group: 'Equipaje', text: 'Snacks y esfero dentro del JAWS' },
  { id: 'p-bolsillos', group: 'Seguridad', text: 'Nunca llevar dinero, celular ni documentos en los bolsillos exteriores del morral' },
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
  packing,
}

export { days, meals, restaurants, places }

// --------- indices utiles ---------
export const dayByDate = new Map(days.map((d) => [d.date, d]))
export const mealById = new Map(meals.map((m) => [m.id, m]))
export const restaurantById = new Map(restaurants.map((r) => [r.id, r]))
export const placeById = new Map(places.map((p) => [p.id, p]))
export const cityById = new Map(cities.map((c) => [c.id, c]))
