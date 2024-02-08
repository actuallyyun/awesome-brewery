import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Grid/'

import BreweryCard from '../components/brewery/BreweryCard'
import { BreweryType } from '../miscs/BreweryType'
import ShowError from '../components/utils/ShowError'
import Search from '../components/search/Search'

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
}

export default function Home({ breweries, search }: HomeProps) {
  const { data, loading, error } = breweries
  const { searchName, handleSearch } = search
  return (
    <Grid container spacing={2}>
      <Grid xs={12} spacing={4}>
        <Search value={searchName} onChange={handleSearch} />
      </Grid>
      <Grid xs={12}>{error && <ShowError />}</Grid>
      {data &&
        data?.map((brewery, index: number) => {
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
