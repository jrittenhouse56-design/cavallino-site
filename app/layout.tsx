export const metadata = {
  title: 'Cavallino',
  description: 'Governance Intelligence and Boardroom Strategy'
}

import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <NavBar />
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
