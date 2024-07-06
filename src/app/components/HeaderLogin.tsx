import type { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/assets/icons8-male-user-50.png'

export const HeaderLogin: FC = () => {
  return (
    <header className=" flex items-center justify-between p-4 bg-white bg-opacity-15 rounded-md m-3">
      <h1 className="text-white font-bold text-2xl md:text-4xl">
        <Link href="/dashboard">Study</Link>
      </h1>
      <div>
        <button className="text-white font-bold text-l bg-opacity-0 mr-2 bg-white p-2 rounded-lg border-2 border-white border-opacity-20 hover:bg-opacity-30 transition duration-300">
          <Link href="/upload">+ Notion</Link>
        </button>

        <button className="text-white font-bold text-l bg-opacity-20 mr-2 bg-white p-2 rounded-lg  hover:bg-opacity-30  transition duration-300">
          <Link href="/friends">Amigos</Link>
        </button>
        <button className="text-white font-bold text-l bg-opacity-20 mr-2 bg-white p-2 rounded-lg  hover:bg-opacity-30  transition duration-300">
          <Link href="/courses">Cursos</Link>
        </button>
        <button className="text-white font-bold text-l bg-opacity-20 bg-white p-2 rounded-lg  hover:bg-opacity-30  transition duration-300">
          <Link href="/profile">
            <Image src={profile} width={30} height={25} alt="Profile picture" />
          </Link>
        </button>
      </div>
    </header>
  )
}
