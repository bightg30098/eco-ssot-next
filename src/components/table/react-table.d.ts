import '@tanstack/react-table'

declare module '@tanstack/table-core' {
  interface ColumnMeta {
    cell?: {
      className?: string
      rowSpan?: number
      colSpan?: number
    }

    header?: {
      className?: string
      rowSpan?: number
      colSpan?: number
    }

    footer?: {
      className?: string
      rowSpan?: number
      colSpan?: number
    }
  }

  interface TableMeta {
    className?: string
  }
}
