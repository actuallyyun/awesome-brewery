import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Container from '@mui/material/Container'
import { useDebouncedCallback } from 'use-debounce'

import { useFetch } from './hooks/useFetch'
import { BreweryType } from './miscs/BreweryType'
import { appendSearchUrl } from './miscs/utils'
import Header from './components/header/Header'
import Home from './pages/Home'
import Brewery from './pages/Brewery'
import { StateType } from './miscs/StateType'

export const LISTBREWERIERSURL = 'https://api.openbrewerydb.org/v1/breweries'

const App = () => {
  const [url, setUrl] = useState<string>(LISTBREWERIERSURL)
  const [searchName, setSearchName] = useState('')
  const [state, setState] = useState<StateType | null>(null)

  const handleSelect = (e: any, value: StateType | null) => {
    setState((val) => (val = value))
    console.log(value)
  }

  const debounced = useDebouncedCallback((value) => {
    setUrl((url) => (url = appendSearchUrl(LISTBREWERIERSURL, value)))
  }, 3000)
  const handleNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName((n) => (n = e.target.value))
    debounced(e.target.value)
  }

  const search = { searchName: searchName, handleSearch: handleNameSearch }
  const breweries = useFetch<BreweryType[]>(url)
  const states = { state: state, handleStateSelect: handleSelect }

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
          element={
            <Home breweries={breweries} search={search} states={states} />
          }
        ></Route>
        <Route path='/breweries/:breweryId' element={<Brewery />}></Route>
      </Routes>
    </Container>
  )
}

export default App
