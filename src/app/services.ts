import { max } from 'date-fns'

import ky from '@/lib/ky'

import type { Summary } from './types'

export async function getSummary() {}

export async function getLatestDate() {
  const data = await ky.get('summary').json<Summary>()
  const maxDate = max(
    [data.revenue.latestDate, data.CO2Emission.latestDate, data.waterUse.latestDate, data.waste.latestDate].map(
      (d) => new Date(d),
    ),
  )

  return { data: maxDate }
}
