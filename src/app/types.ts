export type Summary = {
  revenue: {
    latestDate: string
    currentYear: number
    compareYear: number
    baseYear: number
    compare_gradient: number
    base_gradient: string
  }
  electricPowerUtilization: {
    currentYear: number
    compareYear: number
    baseYear: number
    compare_gradient: number
    base_gradient: number
    intensity: {
      compareYear: number
      compareYTM: number
      currentYTM: number
      target: string
      targetAmount: number
      actual: number
      true_actual: number
    }
  }
  CO2Emission: {
    latestDate: string
    currentYear: number
    compareYear: number
    baseYear: number
    compare_gradient: number
    base_gradient: number
    target: string
    targetAmount: number
    actual: number
    true_actual: number
  }
  waterUse: {
    latestDate: string
    currentYear: number
    compareYear: number
    baseYear: number
    compare_gradient: number
    base_gradient: number
    intensity: {
      baseYear: number
      compareYTM: number
      currentYTM: number
      target: string
      targetAmount: number
      actual: number
      true_actual: number
    }
  }
  waste: {
    latestDate: string
    currentYear: number
    compareYear: number
    baseYear: number
    compare_gradient: number
    base_gradient: number
    intensity: {
      baseYear: number
      compareYTM: number
      currentYTM: number
      target: string
      targetAmount: number
      actual: number
      true_actual: number
    }
  }
  totalPowerSaving: {
    amount: string
    digital: string
    manage: string
  }
  renewableEnergy: {
    nonRenewableEnergy: number
    selfConstructedSolarEnergy: number
    tRec: number
    target: string
  }
  singleElectric: {
    compareYear: number
    compareYTM: number
    currentYTM: number
    target: string
    targetAmount: number
    actual: number
    true_actual: number
  }
}
