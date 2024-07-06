import React from 'react'
import { MainLayout } from '../Layout/MainLayout'

export default function Upload() {
  return (
    <MainLayout>
      {/* Subir la pagina de notion */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-4xl mb-4">Subir</h1>
        <p className="text-white text-lg mb-8 max-w-md">
          Sube tus archivos a la nube
        </p>
      </div>
    </MainLayout>
  )
}
