import { useFetch } from '../../hooks/useFetch'
import ShowError from '../utils/ShowError'
import ShowLoading from '../utils/ShowLoading'
import { BreweryType } from '../../miscs/BreweryType'
import { capitalizeFirstLetter, googleMapUrl } from '../../miscs/utils'

export type BreweryDetailProp = {
  id: string | undefined
}

export default function BreweryDetail({ id }: BreweryDetailProp) {
  console.log({ id })
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`
  const { data, loading, error } = useFetch<BreweryType>(url)
  const brewery = data
  return (
    <>
      {loading && <ShowLoading />}
      {error && <ShowError />}
      {brewery && (
        <div>
          <h1>{brewery.name}</h1>
          <p>{brewery.address_1}</p>
          {brewery.address_2 && <p>{brewery.address_2}</p>}
          {brewery.address_3 && <p>{brewery.address_2}</p>}
          <p>
            {brewery.city},{brewery.state} {brewery.postal_code}
          </p>
          <p>{brewery.phone}</p>
          <p>Type:{capitalizeFirstLetter(brewery.brewery_type)}</p>
          <p>
            <a href={brewery.website_url}>{brewery.website_url}</a>
          </p>
          {brewery.latitude && brewery.latitude && (
            <a
              href={googleMapUrl(brewery.latitude, brewery.longitude)}
              target='_blank'
              rel='noreferrer'
            >
              View Map
            </a>
          )}
        </div>
      )}
    </>
  )
}
