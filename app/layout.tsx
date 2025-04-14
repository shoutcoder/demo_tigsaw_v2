import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tigsaw Demo Store',
  description: 'Tigsaw Demo Store'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
