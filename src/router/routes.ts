import { nanoid } from 'nanoid'

export const routes = () =>
  [
    { path: '/home', label: '首頁', pathAlias: '/' },
    { path: '/overview', label: '總覽比較' },
    { path: '/carbon', label: '碳排放量' },
    { path: '/renewable-energy', label: '可再生能源' },
    { path: '/electricity', label: '用電' },
    { path: '/analysis/electricity', label: '用電分析' },
    { path: '/water', label: '用水' },
    { path: '/unit-electricity', label: '約當單台用電' },
    { path: '/waste', label: '廢棄物' },
    { path: '/air-compressor', label: '空壓設備' },
    { path: '/decarbonization', label: '脫碳目標' },
    { path: '/management', label: '後台設定' },
  ].map((route) => ({ ...route, id: nanoid() }))
