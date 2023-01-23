import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Waste } from './types'

export async function getWaste() {
  const { data } = await wretch.get('/waste').json<{ data: Waste[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
