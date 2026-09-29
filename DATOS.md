# Cómo editar los datos

Todo está en `src/data/`. No hay base de datos ni panel de administración: se edita el archivo,
se guarda y la app se actualiza.

## Un día del cronograma (`days.ts`)

```ts
{
  date: '2026-10-01',        // YYYY-MM-DD, es también el id
  label: 'Día 2',
  cityId: 'boston',          // boston | nyc | dc | transito
  title: 'Boston: Beacon Hill, Harvard y MIT',
  summary: 'Una línea sobre de qué se trata el día.',
  hotel: 'Hyatt Regency Boston',
  events: [ /* ... */ ],
}
```

## Un evento

```ts
{
  id: 'd2-08',               // único en todo el archivo
  start: '10:20',            // hora de reloj local, 24h
  end: '11:30',              // opcional
  title: 'Harvard University',
  kind: 'visita',            // vuelo tren bus metro caminata hotel visita
                             // comida charla encuentro compras libre otro
  location: 'Harvard Yard',
  address: 'Cambridge, MA 02138',
  notes: 'Lo que haya que recordar.',
  tz: 'America/Bogota',      // solo si esa hora NO es del destino (ej. el vuelo de salida)
  placeIds: ['bos-harvard'], // engancha los briefings de places.ts
  mealId: 'm-d2-almuerzo',   // engancha la franja de meals.ts
  mapsQuery: 'Harvard Yard Cambridge MA',
  meetingPoint: true,        // lo pinta como punto de encuentro obligatorio
}
```

Las horas se guardan como reloj de pared. La app las convierte a hora real usando la zona
del viaje (`America/New_York`) o la que diga `tz`. Boston, Nueva York y Washington están las
tres en la misma zona, así que no hay que hacer cuentas entre ciudades.

## Una franja de comida (`meals.ts`)

```ts
{
  id: 'm-d4-almuerzo',
  date: '2026-10-03',
  kind: 'almuerzo',          // desayuno | almuerzo | cena | snack
  start: '12:45', end: '14:15',
  cityId: 'nyc',
  area: 'Columbus Circle',
  official: ['Whole Foods Market', "Pop's Pizza"],  // lo que trae el logbook
  picks: ['nyc-whole-foods-cc'],                    // ids de restaurants.ts
  note: 'Por qué esta franja se resuelve así.',
}
```

## Un restaurante (`restaurants.ts`)

```ts
{
  id: 'nyc-joes-pizza',
  name: "Joe's Pizza",
  cityId: 'nyc',
  area: 'Times Square / Bryant Park',
  cuisine: 'Pizza',
  price: '$',                // $ | $$ | $$$ | $$$$
  mustTry: ['Slice de pepperoni'],
  mapsQuery: "Joe's Pizza Broadway New York",
  walkMin: 6,                // minutos a pie desde el punto del cronograma
  bestSlot: 'm-d3-almuerzo', // en qué franja encaja mejor
  why: 'Por qué ese día y no otro.',
  heads: 'Advertencia: fila, reserva, horario.',
  source: 'oficial',         // oficial (viene en el logbook) | extra (recomendación) | mia
}
```

Para que un restaurante aparezca en un día, su id tiene que estar en el `picks` de esa franja.

## Un lugar con briefing (`places.ts`)

```ts
{
  id: 'nyc-911',
  name: '9/11 Memorial & Museum',
  cityId: 'nyc',
  category: 'historico',     // historico museo monumento universidad
                             // barrio mirador parque institucion otro
  address: '180 Greenwich St, New York, NY 10007',
  mapsQuery: '9/11 Memorial Museum New York',
  coords: { lat: 40.7115, lng: -74.0134 },   // habilita "comida cerca"
  briefing: {
    summary: 'Dos o tres líneas de contexto para leer antes de llegar.',
    timeline: [{ year: '2001', text: 'Qué pasó.' }],
    dontMiss: ['Qué mirar concretamente estando ahí.'],
    questions: ['Las preguntas de reflexión del logbook.'],
    funFact: 'El dato que nadie sabe.',
  },
}
```

Para que el briefing salga dentro de un evento, poner su id en el `placeIds` de ese evento.
En la pestaña **Lugares** aparecen todos, estén o no enganchados a un evento.
