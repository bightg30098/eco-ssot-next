import { Toaster } from '@/lib/react-hot-toast'
import NProgressRouter from '@/router/NProgressRouter'

import Header from './Header'

import '@/styles/globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex h-screen w-screen flex-col overflow-hidden">
        <Toaster />
        <NProgressRouter>
          <Header />
          {children}
        </NProgressRouter>
      </body>
    </html>
  )
}
