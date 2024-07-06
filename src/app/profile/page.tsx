import Image from 'next/image'
import profile from '@/assets/icons8-male-user-50.png'
import { HeaderLogin } from '../components/HeaderLogin'
import { MainLayout } from '../Layout/MainLayout'
import Link from 'next/link'

export default function Profile() {
  const user = {
    name: 'Juan Perez',
    description: 'Estudiante de Ingeniería',
    university: 'UNAM',
  }

  const courses = [
    {
      name: 'Álegebra',
      description: 'Curso de álegebra básica',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Cálculo',
      description: 'Curso de cálculo básico',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Física',
      description: 'Curso de física básica',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Química',
      description: 'Curso de química básica',
      image: 'https://via.placeholder.com/150',
    },
  ]

  const summaries = [
    {
      name: 'Factorizacion',
      course: 'Álegebra',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Derivadas',
      course: 'Cálculo',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Leyes de Newton',
      course: 'Física',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Tabla periódica',
      course: 'Química',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Factorizacion',
      course: 'Álegebra',
      image: 'https://via.placeholder.com/150',
    },
  ]

  const colores = ['bg-blue-100', 'bg-red-100', 'bg-yellow-100', 'bg-green-100']

  return (
    <MainLayout>
      <div className="flex justify-center mb-3">
        <div className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-40 p-10">
          <div className="bg-gray-200 w-40 h-40 rounded-full mb-4">
            <Image
              src={profile}
              width={150}
              height={150}
              alt="Profile picture"
            />
          </div>
          <h2 className="text-gray-800 font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.description}</p>
          <p className="text-gray-500">{user.university}</p>
        </div>
      </div>

      <div className="col-span-2 row-span-1 bg-white rounded-md p-4 m-3 bg-opacity-60">
        <h2 className="text-gray-800 font-bold mb-2">Cursos inscritos</h2>
        <div className="grid grid-cols-2 gap-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-md p-2 text-center cursor-pointer hover:bg-blue-100 
                bg-gray-200
                `} // Aplica el color
            >
              <div
                key={index}
                className={`bg-gray-200 w-auto h-40 rounded-md 
                ${colores[index % colores.length]}
                `}
              >
                {/* <Image
                  src={course.image}
                  width={150}
                  height={150}
                  alt="Course image"
                /> */}
              </div>
              <p className="text-gray-700">{course.name}</p>
              <p className="text-gray-500">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Resumenes</h2>

        <div className="grid grid-cols-3 gap-2">
          {/* Grid of summaries */}
          {summaries.map((summary, index) => (
            <Link
              href={
                'https://puffy-pan-a1d.notion.site/Ecuaciones-Diferenciales-424f30b44d624966913a6fa1a821acf7'
              }
            >
              <div
                key={index}
                className={`rounded-md p-2 text-center cursor-pointer hover:bg-blue-100 bg-gray-200
                }`} // Aplica el color
              >
                <div
                  key={index}
                  className={`bg-gray-200 w-auto h-40 rounded-md ${
                    colores[index % colores.length]
                  }`}
                >
                  {/* <Image
                src={summary.image}
                width={150}
                height={150}
                alt="Summary image"
                /> */}
                </div>
                <p className="text-gray-700">{summary.name}</p>
                <p className="text-gray-500">{summary.course}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
