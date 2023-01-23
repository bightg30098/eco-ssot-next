import { YearSelect } from '@/app/YearSelect'
import { getLatestDate } from '@/app/services'

export default async function OverviewHistory() {
  const latestDate = await getLatestDate()

  return (
    <>
      <div className="flex items-center justify-between">
        <div></div>
        <div className="flex items-center space-x-8">
          <YearSelect year={latestDate.data.getFullYear()} />
        </div>
        <div></div>
      </div>
    </>
  )
}
