import { FormEvent } from 'react'

export type SearchProps = {
  value: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
}
