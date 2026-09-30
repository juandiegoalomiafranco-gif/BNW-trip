# BNW Trip

App del viaje pedagógico **Boston – New York – Washington** del Colegio Colombo Británico,
del 30 de septiembre al 9 de octubre de 2026.

Está hecha para el celular: se abre en el navegador, se puede "agregar a la pantalla de inicio"
y funciona sin señal una vez que se abrió la primera vez.

## Qué tiene

| Pestaña | Para qué |
|---|---|
| **Hoy** | Qué está pasando en este momento y qué sigue, con la hora local del destino y la de Cali, y aviso si ese día hay tarea. |
| **Plan** | El cronograma completo, día por día. El día de hoy muestra arriba la hora, lo que toca ahora y lo que sigue, y baja solo hasta el evento en curso. Cada comida trae dentro la recomendación más cercana a la ruta. |
| **Comida** | Cada franja de comida del cronograma: una recomendación destacada, las demás opciones plegadas, las del colegio y una lista propia de sitios "sí o sí". |
| **Lugares** | Briefing histórico de cada parada, con línea de tiempo, qué mirar y las preguntas de reflexión del logbook. |
| **Tareas** | Las tres tareas del fieldwork (Crispus Attucks, 11-S y Banco Mundial) con guion, preguntas en inglés, contexto y fuentes. |

Lo que se marque (restaurantes visitados, mi lista) se guarda en **ese teléfono**.
No se sincroniza entre dispositivos.

## Correr en local

```bash
npm install
npm run dev
```

## Contraseña

La app pide una contraseña compartida. Por defecto es `BNW2026` (no distingue mayúsculas).

No es seguridad de verdad: es una app estática, así que el hash viaja al navegador.
Sirve para que no entre cualquiera que se tropiece con el link, nada más.

Para cambiarla, generar el hash y pegarlo en `src/lib/config.ts`:

```bash
node -e "crypto.subtle.digest('SHA-256', new TextEncoder().encode('nuevaclave')).then(b => console.log(Buffer.from(b).toString('hex')))"
```

## Publicar

**Vercel / Netlify** — build `npm run build`, carpeta `dist`. Nada más que configurar.

**GitHub Pages** — el workflow de `.github/workflows/deploy.yml` lo hace solo en cada push a
`main`. Hay que activar Pages con "GitHub Actions" como origen en Settings → Pages.

## Editar el contenido

Todo el contenido vive en `src/data/`, en archivos de TypeScript que se leen como listas:

- `days.ts` — el cronograma. Un objeto por día, con sus eventos en hora local.
- `meals.ts` — cada franja de comida: hora, zona, opciones del colegio y recomendaciones.
- `restaurants.ts` — la lista de comida. `bestSlot` amarra cada sitio a la franja donde encaja.
- `places.ts` — los briefings históricos.
- `tasks.ts` — las tareas del fieldwork. `eventIds` las engancha a los eventos del cronograma.
- `types.ts` — la forma de cada uno de esos objetos.

Ver [`DATOS.md`](./DATOS.md) para los detalles del formato.
