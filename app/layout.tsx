import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Weifeng\'s Portfolio',
  description: 'A Junior Data Analyst',
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
