// src/app/layout.js
import './globals.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  icons: {
    icon: '/logo.png', // koristi logo.png iz /public
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.className} bg-white`}>
      <body className="text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-8 lg:px-12 pt-4 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
