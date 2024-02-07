import React from 'react'

import { useFetch } from './hooks/useFetch'
import { Brewery } from './miscs/Brewery'
import BreweryCard from './components/BreweryCard'

const LISTBREWERIERSURL = 'https://api.openbrewerydb.org/v1/breweries'

const App = () => {
  const { data, loading, error } = useFetch<Brewery>(LISTBREWERIERSURL)

  console.log({ data, loading, error })
  return (
    <div>
      App
      {data?.map((brewery) => {
        return <BreweryCard brewery={brewery} />
      })}
    </div>
  )
}

export default App