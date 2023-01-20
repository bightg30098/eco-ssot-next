'use client'

import { useCallback, useEffect, useState } from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import nprogress from '@/lib/nprogress'
import RouterContext from '@/router/RouterContext'

type Props = {
  children: React.ReactNode
  onStart?: () => void
  onComplete?: () => void
}

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const onStart = useCallback(() => nprogress.start(), [])
  const onComplete = useCallback(() => nprogress.done(), [])
  return (
    <RouterEventWrapper onStart={onStart} onComplete={onComplete}>
      {children}
    </RouterEventWrapper>
  )
}

function RouterEventWrapper({ children, onStart = () => {}, onComplete = () => {} }: Props) {
  const [isChanging, setIsChanging] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => setIsChanging(false), [pathname, searchParams])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const start = () => {
      clearTimeout(timeout)
      timeout = setTimeout(onStart, 200)
    }

    const done = () => {
      clearTimeout(timeout)
      nprogress.done()
    }

    if (isChanging) {
      start()
    }

    return () => {
      done()
    }
  }, [isChanging, onStart, onComplete])

  return <RouterContext.Provider value={() => setIsChanging(true)}>{children}</RouterContext.Provider>
}
