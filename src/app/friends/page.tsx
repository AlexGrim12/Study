'use client'

import Head from 'next/head'
import Image from 'next/image'
import profile from '@/assets/icons8-male-user-50.png'
import Link from 'next/link'
import { useState } from 'react'
import { MainLayout } from '../Layout/MainLayout'

interface Friend {
  UID: number
  name: string
  description: string
  university: string
}

interface Summary {
  SID: number
  title: string
  course: string
  date: string
}

interface UserSummaries {
  UID: number
  name: string
  description: string
  university: string
  summaries: Summary[]
}

export default function Friends() {
  const friends: Friend[] = [
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
  ]

  const sumariesPerUser: UserSummaries[] = [
    {
      UID: 1,
      name: 'Alejandro Grimaldo',
      description: 'Estudiante',
      university: 'UNAM',
      summaries: [
        {
          SID: 1,
          title: 'Resumen de ecuaciones diferenciales',
          course: 'Ecuaciones diferenciales',
          date: '2021-09-01',
        },
        {
          SID: 2,
          title: 'Resumen de probabilidad',
          course: 'Probabilidad',
          date: '2021-09-02',
        },
      ],
    },
    {
      UID: 2,
      name: 'Alan',
      description: 'Estudiante de Ingeniería',
      university: 'UNAM',
      summaries: [
        {
          SID: 3,
          title: 'Resumen de matemáticas avanzadas',
          course: 'Matemáticas Avanzadas',
          date: '2021-09-03',
        },
        {
          SID: 4,
          title: 'Resumen de estructuras discretas',
          course: 'Estructuras Discretas',
          date: '2021-09-04',
        },
      ],
    },
    {
      UID: 3,
      name: 'Fernando',
      description: 'Estudiante de Ingeniería',
      university: 'UNAM',
      summaries: [
        {
          SID: 5,
          title: 'Resumen de ingeniería de software',
          course: 'Ingeniería de Software',
          date: '2021-09-05',
        },
      ],
    },
  ]

  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null) // Para almacenar el amigo seleccionado

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend)
  }

  return (
    <MainLayout>
      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Amigos</h2>
        <div className="grid grid-cols-3 gap-2">
          {friends.map((friend) => (
            <div
              key={friend.UID}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10 text-center cursor-pointer"
              onClick={() => handleFriendClick(friend)} // Agrega el manejador de clic
            >
              <p className="text-gray-800 mt-2">{friend.name}</p>
              <p className="text-gray-600 mt-2">{friend.description}</p>
              <p className="text-gray-600 mt-2">{friend.university}</p>
            </div>
          ))}
        </div>

        {/* Muestra los resúmenes del amigo seleccionado */}
        {selectedFriend && (
          <div className="mt-4">
            <h3 className="text-gray-800 font-bold mb-2">
              Resúmenes de {selectedFriend.name}
            </h3>
            <ul>
              {sumariesPerUser
                .find((user) => user.UID === selectedFriend.UID)
                ?.summaries?.map((summary) => (
                  <li key={summary.SID}>
                    <p className="text-gray-600">
                      {summary.title} - {summary.course} ({summary.date})
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
