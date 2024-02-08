import { useParams } from 'react-router-dom'

import BreweryDetail from '../components/brewery/BreweryDetail'

export default function Brewery() {
  const { breweryId } = useParams()
  return (
    <>
      <BreweryDetail id={breweryId} />
    </>
  )
}
