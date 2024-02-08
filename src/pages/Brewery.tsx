import { useParams } from 'react-router-dom'

import styles from './brewery.module.css'
import BreweryDetail from '../components/brewery/BreweryDetail'

export default function Brewery() {
  const { breweryId } = useParams()
  return (
    <div className={styles.center}>
      <BreweryDetail id={breweryId} />
    </div>
  )
}
