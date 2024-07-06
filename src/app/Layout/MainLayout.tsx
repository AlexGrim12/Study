import React from 'react'
import Image from 'next/image'
import { HeaderLogin } from '../components/HeaderLogin'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-cyan-500 min-h-screen flex flex-col">
      <HeaderLogin />
      <main>
        {children} {/* Aquí se renderizará el contenido de la página */}
      </main>
    </div>
  )
}
