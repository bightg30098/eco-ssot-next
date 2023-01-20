import '@/styles/globals.css'

import Header from '@/components/Header'

import RootLayoutClient from './layout.client'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RootLayoutClient>
          <Header />
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}
