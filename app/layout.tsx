import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const SpaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], weight: ['400', '500', '600', '700'] 
})


export const metadata: Metadata = {
  title: 'Pricewise',
  description: 'Track product prices and get notified when they drop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar/>
          {children}

        </main>
      </body>
    </html>
  )
}
