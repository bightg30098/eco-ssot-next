import { nanoid } from 'nanoid'

import wretch from '@/lib/wretch'

import type { Overview } from './types'

export async function getOverview(q: Record<string, string> = {}) {
  const { data } = await wretch.url('/overall').query(q).get().json<{ data: Overview[] }>()

  const nextData = data.map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}

export async function getOverviewHistory(q: Record<string, string> = {}) {
  const { data } = await wretch.url('/overall/history').query(q).get().json<{ data: Overview[] }>()

  const nextData = data.filter(Boolean).map((d) => ({
    id: nanoid(),
    ...d,
    subRows: d.plants?.map((_d) => ({ ..._d, id: nanoid() })),
  }))

  return { data: nextData }
}
