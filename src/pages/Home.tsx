import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Grid/'

import BreweryCard from '../components/brewery/BreweryCard'
import { BreweryType } from '../miscs/BreweryType'
import ShowError from '../components/utils/ShowError'
import ShowNoMatch from '../components/utils/ShowNoMatch'
import Search from '../components/search/Search'
import { StateType } from '../miscs/StateType'
import StateSelect from '../components/search/SelectState'

type HomeProps = {
  breweries: {
    data: BreweryType[] | undefined
    error: Error | undefined
    loading: boolean
  }
  search: {
    searchName: string
    handleSearch(e: React.ChangeEvent<HTMLInputElement>): void
  }
  states: {
    state: StateType | null
    handleStateSelect(event: any, value: StateType | null): void
  }
}

export default function Home({ breweries, search, states }: HomeProps) {
  const { data, loading, error } = breweries
  const { searchName, handleSearch } = search
  return (
    <Grid container spacing={2}>
      <Grid xs={12} spacing={4}>
        <Search value={searchName} onChange={handleSearch} />
        <StateSelect states={states} />
      </Grid>
      <Grid xs={12}>{error && <ShowError />}</Grid>
      {data?.length === 0 && <ShowNoMatch />}
      {data &&
        data.map((brewery, index: number) => {
          return (
            <Grid xs={6} md={4} key={index}>
              <Item>
                <BreweryCard brewery={brewery} />
              </Item>
            </Grid>
          )
        })}
    </Grid>
  )
}
