/** Link de busqueda en Google Maps. Funciona en la app del celular si esta instalada. */
export function mapsSearch(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** Ruta a pie hasta un destino, desde donde este el teléfono. */
export function mapsWalkTo(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}&travelmode=walking`
}

/** Buscar restaurantes alrededor de unas coordenadas. */
export function mapsNearbyFood(coords: { lat: number; lng: number }): string {
  return `https://www.google.com/maps/search/restaurants/@${coords.lat},${coords.lng},16z`
}
