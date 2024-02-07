import { BreweryCardProp } from '../../miscs/Brewery'
import { capitalizeFirstLetter, googleMapUrl } from '../../miscs/utils'

export default function BreweryCard({ brewery }: BreweryCardProp): JSX.Element {
  return (
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
  )
}
