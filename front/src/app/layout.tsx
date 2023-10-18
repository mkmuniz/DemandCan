import NavBar from '@/components/ui/organisms/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/ui/molecules/Footer'
import TanstackProvider from '@/components/providers/TantaskProvider'
import SideNavBar from '@/components/ui/molecules/SideNavBar'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Latinhas LLC</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <TanstackProvider>
          <NavBar />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  )
}
