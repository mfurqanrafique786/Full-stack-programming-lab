import './globals.css'

export const metadata = {
  title: 'HotSpring Portable Spas',
  description: 'Top Portable Spas and Hot Tubs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
