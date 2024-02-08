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

const LISTBREWERIERSURL = 'https://api.openbrewerydb.org/v1/breweries'

const App = () => {
  const [url, setUrl] = useState<string>(LISTBREWERIERSURL)
  console.log({ url })

  const [searchName, setSearchName] = useState('')

  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName((n) => (n = e.target.value))
    setUrl((url) => (url = appendSearchUrl(LISTBREWERIERSURL, e.target.value)))
  }

  //const memoSearchName = useMemo(() => setSearchName(searchName), [searchName])

  const { data, loading, error } = useFetch<BreweryType>(url)
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
      <Routes>
        <Route path='/' element={<Home data={data} error={error} />}></Route>
        <Route path='/brewery/:id' element={<Brewery />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </Container>
  )
}

export default App
