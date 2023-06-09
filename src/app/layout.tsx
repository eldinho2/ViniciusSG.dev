import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/Header'
import About from './components/About'
import Portifolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-inter" 
})

export const metadata = {
  title: 'Vinicius | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} bg-[#212121]`} lang="pt-BR">
      <body>
        <Header />
        {children}
        <About />
        <Portifolio />
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
