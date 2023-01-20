import { nanoid } from 'nanoid'

export const routes = () =>
  [
    { path: '/home', label: 'Home', pathAlias: '/' },
    { path: '/overview', label: 'Overview' },
    { path: '/carbon', label: 'Carbon' },
    { path: '/renewable-energy', label: 'Renewable Energy' },
    { path: '/electricity', label: 'Electricity' },
    { path: '/analysis/electricity', label: 'Electricity Analysis' },
    { path: '/water', label: 'Water' },
    { path: '/unit-electricity', label: 'Unit Electricity' },
    { path: '/waste', label: 'Waste' },
    { path: '/air-compressor', label: 'Air Compressor' },
    { path: '/decarb', label: 'Decarb' },
    { path: '/management', label: 'Management' },
  ].map((route) => ({ ...route, id: nanoid() }))
