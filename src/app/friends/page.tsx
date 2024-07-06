import Head from 'next/head'
import Image from 'next/image'
import profile from '@/assets/icons8-male-user-50.png'
import Link from 'next/link'
import { MainLayout } from '../Layout/MainLayout'

export default function Friends() {
  const friends = [
    {
      UID: 1,
      name: 'Alejandro Grimaldo',
      description: 'Estudiante de Ingeniería',
      university: 'UNAM',
    },
    {
      UID: 2,
      name: 'Alan',
      description: 'Estudiante de Ingeniería',
      university: 'UNAM',
    },
    {
      UID: 3,
      name: 'Fernando',
      description: 'Estudiante de Ingeniería',
      university: 'UNAM',
    },
    {
      UID: 4,
      name: 'Juan',
      description: 'Estudiante de Ingeniería',
      university: 'UNAM',
    },
    {
      UID: 5,
      name: 'Jorge',
      description: 'Estudiante de Ciencias',
      university: 'UNAM',
    },
    {
      UID: 6,
      name: 'Carlos',
      description: 'Estudiante de Ingeniería',
      university: 'Politécnico',
    },
  ]
  return (
    <MainLayout>
      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Amigos</h2>
        <div className="grid grid-cols-3 gap-2">
          {friends.map((friend) => (
            <div
              key={friend.name}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10 text-center"
            >
              <p className="text-gray-800 mt-2">{friend.name}</p>
              <p className="text-gray-600 mt-2">{friend.description}</p>
              <p className="text-gray-600 mt-2">{friend.university}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
