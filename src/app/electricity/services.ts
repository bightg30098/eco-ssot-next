import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Electricity } from './types'

export async function getElectricity() {
  const { data } = await wretch.get('/electric').json<{ data: Electricity[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
