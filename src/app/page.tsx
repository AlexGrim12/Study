import Image from 'next/image'
import Head from 'next/head'
import HeaderLogout from './components/HeaderLogout'

export default function Home() {
  return (
    <>
      <div className="bg-cyan-500 min-h-screen flex flex-col">
        {/* Header */}
        <HeaderLogout />

        {/* Main Content */}
        <main className="flex-grow w-full container mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-4xl mb-4">Study</h1>
          <p className="text-white text-lg mb-8 max-w-md">
            Tu guía perfecta para ser el mejor estudiante
          </p>
        </main>
      </div>
    </>
  )
}
