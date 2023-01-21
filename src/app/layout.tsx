import '@/styles/globals.css'

import { Toaster } from '@/lib/react-hot-toast'

import Header from './Header'
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
        <Toaster />
        <RootLayoutClient>
          <div className="flex h-screen w-screen flex-col overflow-hidden">
            <Header />
            {children}
          </div>
        </RootLayoutClient>
      </body>
    </html>
  )
}
