import TablePage from '../TablePage'
import { getLatestDate } from '../services'

import UnitElectricityTable from './UnitElectricityTable'
import { getUnitElectricity } from './services'

export default async function UnitElectricity() {
  const [unitElectricity, latestDate] = await Promise.all([getUnitElectricity(), getLatestDate()])

  return (
    <TablePage title="Unit Electricity">
      {unitElectricity?.data && latestDate?.data && (
        <UnitElectricityTable data={unitElectricity.data} latestDate={latestDate.data} data-superjson />
      )}
    </TablePage>
  )
}
