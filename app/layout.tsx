import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'
import { Providers } from '../components/providers'
import DarkModeToggle from '../components/dark-mode-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My E-Commerce App',
  description: 'E-commerce site using FakerShop API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors`}>
        <Providers>
          <Header />
          <div className="container mx-auto px-4 py-4">
            <DarkModeToggle />
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
