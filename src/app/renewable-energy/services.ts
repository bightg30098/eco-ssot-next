import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { RenewableEnergy } from './types'

export async function getRenewableEnergy() {
  const { data } = await wretch.get('/renewableenergy').json<{ data: RenewableEnergy[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
