import { nanoid } from 'nanoid'

export const routes = () =>
  [
    { path: 'goal', label: 'Annual Target', pathAlias: '' },
    { path: 'decarb', label: 'Decarb' },
    { path: 'data-status', label: 'Data Status' },
    { path: 'fem-csr', label: 'FEM & CSR' },
    { path: 'pic', label: 'PIC' },
    { path: 'plant-changelog', label: 'Plant Changelog' },
    { path: 'revenue', label: 'Revenue' },
    { path: 'permission', label: 'Permission' },
    { path: 'changelog', label: 'Changelog' },
  ].map((route) => ({ ...route, id: nanoid() }))
