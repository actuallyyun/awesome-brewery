import React, { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Grid/'
import Container from '@mui/material/Container'

import { useFetch } from './hooks/useFetch'
import { BreweryType } from './miscs/BreweryType'
import BreweryCard from './components/brewery/BreweryCard'
import Search from './components/search/Search'
import { appendSearchUrl } from './miscs/utils'
import Header from './components/header/Header'
import Home from './pages/Home'
import Admin from './pages/admin'
import Brewery from './pages/Brewery'

export const LISTBREWERIERSURL = 'https://api.openbrewerydb.org/v1/breweries'

const App = () => {
  const [url, setUrl] = useState<string>(LISTBREWERIERSURL)
  console.log({ url })

  const [searchName, setSearchName] = useState('')

  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName((n) => (n = e.target.value))
    setUrl((url) => (url = appendSearchUrl(LISTBREWERIERSURL, e.target.value)))
  }

  const search = { searchName: searchName, handleSearch: handleNameSearch }

  const breweries = useFetch<BreweryType[]>(url)
  return (
    <Container maxWidth='md'>
      <Grid container spacing={2}>
        <Grid xs={12} spacing={4}>
          <Header />
        </Grid>
      </Grid>
      <Routes>
        <Route
          path='/'
          element={<Home breweries={breweries} search={search} />}
        ></Route>
        <Route path='/breweries/:breweryId' element={<Brewery />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </Container>
  )
}

export default App
