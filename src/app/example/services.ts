// Description: Example services

import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Example } from './types'

export async function getUnitElectricity() {
  const { data } = await wretch.get('/example').json<{ data: Example[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
  }))

  return { data: nextData }
}
