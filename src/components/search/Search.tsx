import { SearchProps } from '../../miscs/Search'

export default function Search({ value, onChange }: SearchProps): JSX.Element {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='company name'
      aria-label='title'
    />
  )
}
