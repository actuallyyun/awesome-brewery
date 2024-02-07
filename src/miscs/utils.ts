export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


export function googleMapUrl(latitude: string, longitude: string) {
  return `https://maps.google.com/?q=${latitude},${longitude}`
}