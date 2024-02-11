import { useFetch } from '../../hooks/useFetch'
import ShowError from '../utils/ShowError'
import ShowLoading from '../utils/ShowLoading'
import { BreweryType } from '../../miscs/types/Brewery'
import { capitalizeFirstLetter, googleMapUrl } from '../../miscs/utils'
import styles from './brewery.module.css'

export type BreweryDetailProp = {
  id: string | undefined
}

export default function BreweryDetail({ id }: BreweryDetailProp) {
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`
  const { data, loading, error } = useFetch<BreweryType>(url)
  const brewery = data
  return (
    <>
      {loading && <ShowLoading />}
      {error && <ShowError />}
      {brewery && (
        <div className={styles.center}>
          <h1>{brewery.name}</h1>
          <p>Address: {brewery.address_1}</p>
          {brewery.address_2 && <p>{brewery.address_2}</p>}
          {brewery.address_3 && <p>{brewery.address_2}</p>}
          <p>
            City: {brewery.city},{brewery.state} {brewery.postal_code}
          </p>
          <p>Phone: {brewery.phone}</p>
          <p>Type: {capitalizeFirstLetter(brewery.brewery_type)}</p>
          <p>
            Website: <a href={brewery.website_url}>{brewery.website_url}</a>
          </p>
          {brewery.latitude && brewery.latitude && (
            <a
              href={googleMapUrl(brewery.latitude, brewery.longitude)}
              target='_blank'
              rel='noreferrer'
            >
              <h4>View On Google Map</h4>
            </a>
          )}
        </div>
      )}
    </>
  )
}
