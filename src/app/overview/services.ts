import ky from '@/lib/ky'

import type { Overview } from './types'

export async function getOverview() {
  return ky.get('overall', {}).json<{ data: Overview[] }>()
}
