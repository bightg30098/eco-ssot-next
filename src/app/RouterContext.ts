'use client'

import { createContext } from 'react'

const RouterContext = createContext<(next: boolean) => void>(() => {})

export default RouterContext
