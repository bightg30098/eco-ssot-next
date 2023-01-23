export type Waste = {
  latestDate: string
  name: string
  unrecoverableGeneral: number
  unrecoverableGazardous: number
  recoverableGeneral: number
  recoverableResource: number
  total: number
  currentYTM: number
  intensityCurrentYTM: number
  intensityBaseYear: number
  intensityGradient: number
  recoveryRate: number
  plants?: Waste[]
}
