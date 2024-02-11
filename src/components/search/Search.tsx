import { SearchOutlined } from '@mui/icons-material'
import { Divider, IconButton, InputBase, Paper } from '@mui/material'

import { SearchProps } from '../../miscs/types/Search'

const Search = ({ value, onChange }: SearchProps): JSX.Element => {
  return (
    <Paper
      elevation={3}
      sx={{ display: 'flex', alignItems: 'center', px: 1, py: 0.5 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search...'
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={onChange}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation='vertical' />
      <IconButton type='submit'>
        <SearchOutlined />
      </IconButton>
    </Paper>
  )
}

export default Search
