import { max } from 'date-fns'

import wretch from '@/lib/wretch'

import type { Summary } from './types'

export async function getLatestDate() {
  const data = await wretch.url('/summary').get().json<Summary>()
  const maxDate = max(
    [data.revenue.latestDate, data.CO2Emission.latestDate, data.waterUse.latestDate, data.waste.latestDate].map(
      (d) => new Date(d),
    ),
  )

  return { data: maxDate }
}
