import type { Metadata } from 'next'
import { Jura } from 'next/font/google'
import './globals.css'
import ButtonMain from './uiComponents/kit/button'

const jura = Jura({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jura.className}>{children}</body>
    </html>
  )
}
