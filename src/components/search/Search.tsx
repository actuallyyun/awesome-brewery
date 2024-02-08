import Input from '@mui/material/Input'
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Grid'

import { SearchProps } from '../../miscs/SearchType'
import StateSelect from './SelectState'

export default function Search({ value, onChange }: SearchProps): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <Item>
          <Input
            fullWidth
            type='text'
            value={value}
            onChange={onChange}
            placeholder='company name'
            aria-label='title'
          />
        </Item>
      </Grid>
      <Grid xs={3}>
        <Item>
          <StateSelect />
        </Item>
      </Grid>
    </Grid>
  )
}
