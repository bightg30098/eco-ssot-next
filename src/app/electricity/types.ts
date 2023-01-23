export type Electricity = {
  latestDate: string
  name: string
  electricCurrentYear: number
  revenueCurrentYear: number
  billiRevenueElectricCurrentYear: number
  ASPCurrentYear: number
  electricCompareYear: number
  revenueCompareYear: number
  billiRevenueElectricCompareYear: number
  ASPCompareYear: number
  electricGradient: number
  revenueGradient: number
  billiRevenueElectricGradient: number
  ASPGradientYear: number
  plants?: Electricity[]
}
