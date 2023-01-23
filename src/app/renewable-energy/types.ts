export type RenewableEnergy = {
  latestDate: string
  name: string
  totalElectric: number
  solarElectric: number
  electricBuy: number
  energyInvest: number
  tRec: number
  percent: number
  target: number
  area: number
  structure: number
  plants?: RenewableEnergy[]
}
