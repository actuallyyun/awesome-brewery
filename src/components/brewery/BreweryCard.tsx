import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

import { BreweryCardProp } from '../../miscs/types/Brewery'

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
      <Link to={`./breweries/${brewery.id}`}>
        <Button variant='outlined'>Learn more</Button>
      </Link>
    </div>
  )
}
