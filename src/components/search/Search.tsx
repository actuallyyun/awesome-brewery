import Input from '@mui/material/Input'

import { SearchProps } from '../../miscs/Search'

export default function Search({ value, onChange }: SearchProps): JSX.Element {
  return (
    <Input
      fullWidth
      type='text'
      value={value}
      onChange={onChange}
      placeholder='company name'
      aria-label='title'
    />
  )
}
