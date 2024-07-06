import Head from 'next/head'
import Image from 'next/image'
import profile from '@/assets/icons8-male-user-50.png'
import Link from 'next/link'
import { MainLayout } from '../Layout/MainLayout'

export default function Courses() {
  const courses = [
    {
      CID: 1,
      name: 'Ecuaciones diferenciales',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de ecuaciones diferenciales básicas',
      // de public obtener la imagen de la materia
      image: '/ecuaciones.jpg', // Ruta relativa a la carpeta public
    },
    {
      CID: 2,
      name: 'Probabilidad',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de probabilidad básica',
      image: '/proba.jpg', // Ruta relativa a la carpeta public
    },
    {
      CID: 3,
      name: 'Matemáticas Avanzadas',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de matemáticas avanzadas',
      image: '/mates.jpg', // Ruta relativa a la carpeta public
    },
    {
      CID: 4,
      name: 'Estructuras Discretas',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de estructuras discretas',
      image: '/estructuras.jpg', // Ruta relativa a la carpeta public
    },
    {
      CID: 5,
      name: 'Ingeniería de Software',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de ingeniería de software',
      image: '/ing.jpg', // Ruta relativa a la carpeta public
    },
  ]

  return (
    <MainLayout>
      {/* Materias disponibles */}

      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Cursos disponibles</h2>
        <div className="grid grid-cols-3 gap-2 ">
          {courses.map((course) => (
            <div
              key={course.CID}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10"
            >
              {/* Utiliza Image para mostrar la imagen */}
              <Image
                src={course.image}
                alt={course.name}
                width={150}
                height={100}
              />
              <p className="text-gray-800 mt-2">{course.name}</p>
              <p className="text-gray-600 mt-2">{course.school}</p>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
