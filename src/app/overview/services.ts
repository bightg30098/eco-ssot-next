import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Overview } from './types'

export async function getOverview() {
  const { data } = await wretch.get('/overall').json<{ data: Overview[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
