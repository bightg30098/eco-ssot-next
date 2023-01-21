'use client'

import { useEffect } from 'react'

import { toast } from '@/lib/react-hot-toast'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    toast.error(error.message)
  }, [error.message])

  return (
    <>
      <div>Something went wrong!</div>
      <div>{error.name}</div>
      <div>{error.message}</div>
      <div>{error.stack}</div>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}
