import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { UnitElectricity } from './types'

export async function getUnitElectricity() {
  const { data } = await wretch.get('/singleelectric').json<{ data: UnitElectricity[] }>()
  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
