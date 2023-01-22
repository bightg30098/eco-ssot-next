export type Carbon = {
  latestDate: string
  name: string
  totalElectric: number
  solarElectric: number
  tRec: number
  co2Electric: number
  co2Coefficient: number
  scope1: number
  scope2: number
  co2CurrentYear: number
  co2baseYear: number
  co2Gradient: number
  target: number
  plants?: Carbon[]
}
