import '@tanstack/react-table'

declare module '@tanstack/table-core' {
  interface ColumnMeta {
    cellClassName?: string
    headerClassName?: string
  }

  interface TableMeta {
    className?: string
  }
}
