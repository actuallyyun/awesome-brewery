import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Grid/'
import Container from '@mui/material/Container'

import { useFetch } from './hooks/useFetch'
import { Brewery } from './miscs/Brewery'
import BreweryCard from './components/brewery/BreweryCard'
import Search from './components/search/Search'
import { appendSearchUrl } from './miscs/utils'
import Header from './components/header/Header'

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
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid xs={12} spacing={4}>
          <Header />
        </Grid>
        <Grid xs={12} spacing={4}>
          <Search value={searchName} onChange={handleNameSearch} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={12}>{error && <p>oops something went wrong...</p>}</Grid>
        {data.length > 0 &&
          data.map((brewery, index) => {
            return (
              <Grid xs={6} md={4} key={index}>
                <Item>
                  <BreweryCard brewery={brewery} />
                </Item>
              </Grid>
            )
          })}
      </Grid>
    </Container>
  )
}

export default App
