export type UnitElectricity = {
  latestDate: string
  name: string
  electricCompareYear: number
  electricCurrentYear: number
  electricGradient: number
  productionCompareYear: number
  productionCurrentYear: number
  productionGradient: number
  singleElectricCompareYear: number
  singleElectricCurrentYear: number
  singleElectricGradient: number
  plants?: UnitElectricity[]
}
