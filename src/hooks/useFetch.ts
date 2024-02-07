import axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { ApiError, NetworkError } from '../miscs/Error'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T[] | null>(null)
  const [error, setError] = useState<ApiError | NetworkError | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function startFetching(url: string) {
      try {
        const response: AxiosResponse = await axios.get(url)
        if (response.status === 200 && !ignore) {
          setData((data) => (data = response.data))
          setLoading(false)
        }
        if (response.status !== 200) {
          setError(
            (error) =>
              (error = new ApiError(response.status, response.statusText))
          )
          setLoading(false)
        }
      } catch (err) {
        setError((err) => (err = new NetworkError()))
      }
    }
    let ignore = false
    startFetching(url)
    return () => {
      ignore = true
    }
  }, [url])

  return { data, loading, error }
}
