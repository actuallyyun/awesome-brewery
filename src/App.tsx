import React, { useState } from 'react'

import { useFetch } from './hooks/useFetch'
import { Brewery } from './miscs/Brewery'
import BreweryCard from './components/brewery/BreweryCard'
import Search from './components/search/Search'
import { appendSearchUrl } from './miscs/utils'

const LISTBREWERIERSURL = 'https://api.openbrewerydb.org/v1/breweries'

const App = () => {
  //const [searchName, setSearchName] = useState<string | undefined>(undefined)
  const [url, setUrl] = useState<string>(LISTBREWERIERSURL)
  console.log({ url })

  const [searchName, setSearchName] = useState('')

  const handleNameSearch = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement
    setSearchName((n) => (n = target.value))
    setUrl((url) => (url = appendSearchUrl(LISTBREWERIERSURL, target.value)))
  }

  const { data, loading, error } = useFetch<Brewery>(url)
  console.log({ data, loading, error })
  return (
    <div>
      <div>
        <Search value={searchName} onChange={handleNameSearch} />
      </div>
      {error && <p>oops something went wrong...</p>}
      {data.length > 0 &&
        data.map((brewery) => {
          return <BreweryCard brewery={brewery} />
        })}
    </div>
  )
}

export default App
