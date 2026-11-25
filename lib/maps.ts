/** Opens a place in Google Maps as a map pin. No API key needed. */
export function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
