import { getLatestDate } from '../services'

import WasteTable from './WasteTable'
import { getWaste } from './services'

export default async function Waste() {
  const [waste, latestDate] = await Promise.all([getWaste(), getLatestDate()])

  return (
    <>
      {waste?.data && latestDate?.data && <WasteTable data={waste.data} latestDate={latestDate.data} data-superjson />}
    </>
  )
}
