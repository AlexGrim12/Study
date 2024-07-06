import React from 'react'
import { MainLayout } from '../Layout/MainLayout'

export default function Dashboard() {
  const userNotes = [
    {
      title: 'Factorización',
      description:
        'En este resumen se explican las factorizaciones y como resolverlas',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Derivadas',
      description:
        'En este resumen se explican las derivadas y como resolverlas',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Leyes de Newton',
      description:
        'En este resumen se explican las leyes de Newton y como aplicarlas',
      image: 'https://via.placeholder.com/150',
    },
  ]

  const ultimatesNotes = [
    {
      title: 'Ecuaciones de segundo grado',
      description:
        'En este resumen se explican las ecuaciones de segundo grado y como resolverlas',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Derivadas',
      description:
        'En este resumen se explican las derivadas y como resolverlas',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Leyes de Newton',
      description:
        'En este resumen se explican las leyes de Newton y como aplicarlas',
      image: 'https://via.placeholder.com/150',
    },
  ]

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
  ]

  return (
    <MainLayout>
      {/* Las notas del usuario */}
      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Mis notas</h2>
        <div className="grid grid-cols-3 gap-2">
          {userNotes.map((note) => (
            <div
              key={note.title}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10"
            >
              <img src={note.image} alt={note.title} />
              <h3 className="text-gray-800 mt-2">{note.title}</h3>
              <p className="text-gray-600 mt-2">{note.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Amigos */}
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

      {/* carrusel de las notas mas recientes */}
      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Notas más recientes</h2>
        <div className="grid grid-cols-3 gap-2">
          {ultimatesNotes.map((note) => (
            <div
              key={note.title}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10"
            >
              <img src={note.image} alt={note.title} />
              <h3 className="text-gray-800 mt-2">{note.title}</h3>
              <p className="text-gray-600 mt-2">{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
