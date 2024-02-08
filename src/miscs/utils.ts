export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


export function googleMapUrl(latitude: string, longitude: string) {
  return `https://maps.google.com/?q=${latitude},${longitude}`
}

export function appendSearchUrl(baseURL: string, searchName: string) {
  return `${baseURL}?by_name=${searchName}`
}
export function appendStateSelectUrl(
  baseURL: string,
  selectedState: string | undefined
) {
  return selectedState
    ? `${baseURL}?by_state=${selectedState.toLowerCase().replace(' ', '_')}`
    : baseURL
}
