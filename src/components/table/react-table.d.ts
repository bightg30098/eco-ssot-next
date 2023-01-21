import '@tanstack/react-table'

declare module '@tanstack/table-core' {
  interface ColumnMeta {
    cell?: {
      className?: string
      rowSpan?: number
      colSpan?: number
      isExpander?: boolean
    }

    header?: {
      className?: string
      rowSpan?: number
      colSpan?: number
      isExpander?: boolean
    }

    footer?: {
      className?: string
      rowSpan?: number
      colSpan?: number
      isExpander?: boolean
    }
  }

  interface TableMeta {
    className?: string
  }
}
