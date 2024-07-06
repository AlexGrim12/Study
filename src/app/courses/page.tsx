import Head from 'next/head'
import Image from 'next/image'
import profile from '@/assets/icons8-male-user-50.png'
import Link from 'next/link'
import { MainLayout } from '../Layout/MainLayout'

export default function Courses() {
  const courses = [
    {
      CID: 1,
      name: 'Álegebra',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de álegebra básica',
    },
    {
      CID: 2,
      name: 'Cálculo',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de cálculo básico',
    },
    {
      CID: 3,
      name: 'Física',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de física básica',
    },
    {
      CID: 4,
      name: 'Química',
      school: 'UNAM - Facultad de Ingeniería',
      description: 'Curso de química básica',
    },
  ]

  return (
    <MainLayout>
      {/* Materias disponibles */}

      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Cursos disponibles</h2>
        <div className="grid grid-cols-3 gap-2">
          {courses.map((course) => (
            <div
              key={course.CID}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10"
            >
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
