import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Carbon } from './types'

export async function getCarbon() {
  const { data } = await wretch.get('/carbon').json<{ data: Carbon[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
