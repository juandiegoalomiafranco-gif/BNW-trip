# BNW Trip

App del viaje pedagógico **Boston – New York – Washington** del Colegio Colombo Británico,
del 30 de septiembre al 9 de octubre de 2026.

Está hecha para el celular: se abre en el navegador, se puede "agregar a la pantalla de inicio"
y funciona sin señal una vez que se abrió la primera vez.

## Qué tiene

| Pestaña | Para qué |
|---|---|
| **Hoy** | Qué está pasando en este momento y qué sigue, con la hora local del destino y la de Cali. |
| **Plan** | El cronograma completo, día por día y hora por hora, tal como viene en el logbook. |
| **Comida** | Cada franja de comida del cronograma con las opciones del colegio, recomendaciones que quedan a pie de donde vamos a estar, y una lista propia de sitios "sí o sí". |
| **Lugares** | Briefing histórico de cada parada, con línea de tiempo, qué mirar y las preguntas de reflexión del logbook. |
| **Yo** | Checklist de maleta y documentos, y el progreso de restaurantes visitados. |

Todo lo que se marque (restaurantes visitados, maleta) se guarda en **ese teléfono**.
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
- `types.ts` — la forma de cada uno de esos objetos.

Ver [`DATOS.md`](./DATOS.md) para los detalles del formato.
