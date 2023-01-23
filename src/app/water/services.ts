import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Water } from './types'

export async function getWater() {
  const { data } = await wretch.get('/water').json<{ data: Water[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
