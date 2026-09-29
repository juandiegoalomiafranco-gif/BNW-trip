import type { MealSlot } from './types'

/**
 * Cada franja de comida del cronograma.
 * `official` son las opciones que ya trae el logbook del colegio.
 * `picks` son recomendaciones que caen a pie de donde vamos a estar a esa hora.
 */
export const meals: MealSlot[] = [
  // ---------------- BOSTON ----------------
  {
    id: 'm-d1-cena', date: '2026-09-30', kind: 'cena', start: '20:30', end: '22:00',
    cityId: 'boston', área: 'Quincy Market / Faneuil Hall',
    official: ['Puestos de Quincy Market'],
    picks: ['bos-quincy-colonnade', 'bos-union-oyster', 'bos-bovas'],
    note: 'Primera noche y llegamos con el día encima. El Colonnade de Quincy Market suele cerrar sobre las 9 pm, así que hay que entrar de una.',
  },
  { id: 'm-d2-desayuno', date: '2026-10-01', kind: 'desayuno', start: '06:30', cityId: 'boston', área: 'Hyatt Regency Boston', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d2-almuerzo', date: '2026-10-01', kind: 'almuerzo', start: '11:30', end: '13:30',
    cityId: 'boston', área: 'Harvard Square, Cambridge',
    official: ['Opciones libres en Harvard Square'],
    picks: ['bos-felipes', 'bos-bartleys', 'bos-tatte-harvard', 'bos-clover'],
    note: 'La hora exacta no esta fijada en el logbook. El punto de encuentro es Harvard Square a la 1:40 pm, así que hay que comer rápido y barato.',
  },
  {
    id: 'm-d2-cena', date: '2026-10-01', kind: 'cena', start: '20:00', end: '22:00',
    cityId: 'boston', área: 'Quincy Market / North End',
    official: ['Puestos de Quincy Market'],
    picks: ['bos-regina', 'bos-giacomos', 'bos-mikes', 'bos-modern', 'bos-neptune'],
    note: 'Segunda cena seguida en Quincy Market: vale la pena caminar 10 minutos más al North End, el barrio italiano.',
  },
  { id: 'm-d3-desayuno', date: '2026-10-02', kind: 'desayuno', start: '06:30', cityId: 'boston', área: 'Hyatt Regency Boston', official: ['Desayuno incluido en el hotel'], picks: [], note: 'Es también el check out. Desayunar completo: el Amtrak sale 8:10 am.' },

  // ---------------- NEW YORK ----------------
  {
    id: 'm-d3-almuerzo', date: '2026-10-02', kind: 'almuerzo', start: '13:00', end: '14:00',
    cityId: 'nyc', área: 'Bryant Park / Midtown',
    official: ["Joe's Pizza", 'Shake Shack', 'Chick-fil-A', 'Chipotle', 'Whole Foods Market'],
    picks: ['nyc-joes-pizza', 'nyc-los-tacos-times-sq'],
    note: 'Solo hay una hora y el punto de encuentro es Bryant Park a las 2:00 pm. Es el primer almuerzo en NY: la porcion de pizza es el clásico.',
  },
  {
    id: 'm-d3-snack', date: '2026-10-02', kind: 'snack', start: '16:00', end: '17:30',
    cityId: 'nyc', área: 'Washington Heights',
    official: ['Salento Colombian Coffee (va en el recorrido)'],
    picks: ['nyc-salento'],
    note: 'Cafe colombiano en pleno Washington Heights. Parada corta dentro de la caminata.',
  },
  { id: 'm-d3-cena', date: '2026-10-02', kind: 'cena', start: '18:30', end: '20:30', cityId: 'nyc', área: 'Upper East Side', official: ['Cena servida en Joseph Lubin House (Syracuse University)'], picks: [], note: 'Cena cerrada con la universidad: no hay que escoger nada.' },
  { id: 'm-d4-desayuno', date: '2026-10-03', kind: 'desayuno', start: '07:00', cityId: 'nyc', área: 'The New Yorker Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d4-almuerzo', date: '2026-10-03', kind: 'almuerzo', start: '12:45', end: '14:15',
    cityId: 'nyc', área: 'Columbus Circle',
    official: ['Whole Foods Market Columbus Circle', 'Broad Nosh Bagel', "Pop's Pizza", 'Ladurée', 'Just Salad'],
    picks: ['nyc-whole-foods-cc', 'nyc-laduree', 'nyc-levain'],
    note: 'Hora y media, la franja más holgada de NY. El Whole Foods del Deutsche Bank Center tiene barra de comida al peso: rápido y alcanza para todos.',
  },
  {
    id: 'm-d4-cena', date: '2026-10-03', kind: 'cena', start: '20:00', end: '21:00',
    cityId: 'nyc', área: 'Dumbo, Brooklyn',
    official: ['Time Out Market New York (55 Water St)'],
    picks: ['nyc-time-out', 'nyc-julianas'],
    note: 'Solo una hora y el punto de encuentro es el mismo mercado a las 9:00 pm. Time Out Market es un food hall: cada quien escoge puesto y se sientan juntos.',
  },
  { id: 'm-d5-desayuno', date: '2026-10-04', kind: 'desayuno', start: '06:30', cityId: 'nyc', área: 'The New Yorker Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d5-almuerzo', date: '2026-10-04', kind: 'almuerzo', start: '13:00', end: '14:30',
    cityId: 'nyc', área: 'Financial District',
    official: ['Hudson Eats en Brookfield Place', 'The Oculus (Westfield WTC)', 'Fulton Center', 'Eataly NYC Downtown'],
    picks: ['nyc-eataly-downtown', 'nyc-hudson-eats', 'nyc-fraunces'],
    note: 'Venimos del 9/11 Museum, que pega duro. Hudson Eats tiene ventanales al Hudson y es el sitio más tranquilo para bajar el golpe.',
  },
  {
    id: 'm-d5-cena', date: '2026-10-04', kind: 'cena', start: '16:30', end: '20:00',
    cityId: 'nyc', área: 'St. George, Staten Island',
    official: ['Empire Outlets y alrededores'],
    picks: ['nyc-enoteca-maria', 'nyc-empire-outlets'],
    note: 'Tres horas y media: es la franja más larga de todo el viaje. Staten Island tiene poca oferta, pero Enoteca Maria es una rareza que vale la pena si se reserva.',
  },
  { id: 'm-d6-desayuno', date: '2026-10-05', kind: 'desayuno', start: '06:30', cityId: 'nyc', área: 'The New Yorker Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d6-snack', date: '2026-10-05', kind: 'snack', start: '08:00', end: '10:30',
    cityId: 'nyc', área: 'Chelsea Market',
    official: ['Parada dentro de la caminata'],
    picks: ['nyc-chelsea-market'],
    note: 'A esa hora casi todo Chelsea Market está cerrado todavia: lo que abre temprano es café y panaderia. Los Tacos No. 1, que está adentro, abre más tarde.',
  },

  // ---------------- WASHINGTON ----------------
  {
    id: 'm-d6-snack-dc', date: '2026-10-05', kind: 'snack', start: '18:00', end: '20:30',
    cityId: 'dc', área: 'Georgetown',
    official: ['Tiempo libre de compras'],
    picks: ['dc-baked-wired', 'dc-georgetown-cupcake'],
    note: 'Dentro del tiempo de compras. Baked & Wired es el favorito de los locales; Georgetown Cupcake es el de la fila y la foto.',
  },
  {
    id: 'm-d6-cena', date: '2026-10-05', kind: 'cena', start: '20:30', end: '22:30',
    cityId: 'dc', área: 'Dupont Circle',
    official: ['Chick-fil-A', 'Shake Shack', 'Chipotle Mexican Grill'],
    picks: ['dc-bens-chili-bowl', 'dc-dukes-grocery', 'dc-julias-empanadas'],
    note: 'Es cena para llevar y se come en grupo en Dupont Circle, así que tiene que ser portatil. Es la mejor (y casi única) ventana del viaje para caer a U Street.',
  },
  { id: 'm-d7-desayuno', date: '2026-10-06', kind: 'desayuno', start: '07:00', cityId: 'dc', área: 'The Melrose Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d7-almuerzo', date: '2026-10-06', kind: 'almuerzo', start: '12:00', end: '13:30',
    cityId: 'dc', área: 'Western Market, GWU',
    official: ['Western Market (food hall de GWU)'],
    picks: ['dc-western-market', 'dc-founding-farmers', 'dc-tatte-dc'],
    note: 'Hora y media justo al lado del Banco Mundial. Founding Farmers queda a unas cuadras pero casi siempre hay que reservar con días.',
  },
  {
    id: 'm-d7-cena', date: '2026-10-06', kind: 'cena', start: '18:30', end: '20:30',
    cityId: 'dc', área: 'The Wharf DC',
    official: ['Twisted', 'Falafel Inc.', 'Shake Shack', 'Union Pie', 'Chopsmith', 'Surfside Taco', 'Yatai'],
    picks: ['dc-municipal-fish', 'dc-falafel-inc', 'dc-hanks-oyster'],
    note: 'Dos horas frente al Potomac. Al lado esta el Municipal Fish Market, de 1805: el mercado de pescado al aire libre más antiguo del pais.',
  },
  { id: 'm-d8-desayuno', date: '2026-10-07', kind: 'desayuno', start: '06:30', cityId: 'dc', área: 'The Melrose Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d8-almuerzo', date: '2026-10-07', kind: 'almuerzo', start: '13:00', end: '14:00',
    cityId: 'dc', área: 'N Ft Myer Dr, Rosslyn (Virginia)',
    official: ["McDonald's", "Nando's Peri-Peri", 'Wiseguy Pizza', 'BurgerFi', 'Ayat Halal (carrito) — recomendado por el colegio'],
    picks: ['dc-ayat-halal', 'dc-wiseguy'],
    note: 'Solo una hora y después viene una hora de caminata hasta Arlington. El carrito de Ayat es el que recomienda el logbook: barato y rápido.',
  },
  {
    id: 'm-d8-cena', date: '2026-10-07', kind: 'cena', start: '20:30', end: '22:00',
    cityId: 'dc', área: 'The Wharf DC',
    official: ['Twisted', 'Falafel Inc.', 'Shake Shack', 'Union Pie', 'Chopsmith', 'Surfside Taco', 'Yatai'],
    picks: ['dc-union-pie', 'dc-surfside'],
    note: 'Segunda noche seguida en The Wharf: conviene rotar y no repetir el puesto de anoche.',
  },
  { id: 'm-d9-desayuno', date: '2026-10-08', kind: 'desayuno', start: '07:00', cityId: 'dc', área: 'The Melrose Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d9-almuerzo', date: '2026-10-08', kind: 'almuerzo', start: '12:30', end: '14:00',
    cityId: 'dc', área: 'Logan Circle / 14th St NW',
    official: ['Whole Foods Market', 'Da Hong Pao', 'Jinya Ramen Bar', 'Shake Shack', 'Chipotle', "Popeyes (14th St)"],
    picks: ['dc-jinya', 'dc-teds-bulletin', 'dc-le-diplomate'],
    note: 'Hora y media en la zona con mejor comida de toda la ruta de DC. El punto de encuentro es el Whole Foods de 1440 P St a las 2:00 pm.',
  },
  {
    id: 'm-d9-cena', date: '2026-10-08', kind: 'cena', start: '20:00', end: '22:00',
    cityId: 'dc', área: 'Chinatown, Washington DC',
    official: ['Chick-fil-A', "Raising Cane's", 'Fuddruckers', 'Kura Revolving Sushi', 'NewBigWong', 'Spice 6 Modern Indian', "McDonald's", 'Smoothie King', 'Zumo Thai'],
    picks: ['dc-kura', 'dc-chinatown-express', 'dc-daikaya'],
    note: 'Última cena del viaje y son dos horas completas. Kura, el sushi de banda transportadora, es el plan más divertido para un grupo grande.',
  },
  { id: 'm-d10-desayuno', date: '2026-10-09', kind: 'desayuno', start: '07:00', cityId: 'dc', área: 'The Melrose Hotel', official: ['Desayuno incluido en el hotel'], picks: [] },
  {
    id: 'm-d10-snack', date: '2026-10-09', kind: 'snack', start: '09:00', end: '11:00',
    cityId: 'dc', área: 'Georgetown',
    official: ['Parada dentro de la última caminata'],
    picks: ['dc-call-your-mother'],
    note: 'Última oportunidad de comer algo gringo antes del aeropuerto. La caminata pasa por Georgetown.',
  },
]
