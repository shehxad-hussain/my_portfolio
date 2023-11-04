import { Inter } from 'next/font/google'
import './globals.css'

//components
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
