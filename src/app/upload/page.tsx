'use client'
import React, { useState, useEffect } from 'react'
import { MainLayout } from '../Layout/MainLayout'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'

const BASE_URL = 'http://localhost:5000' // Reemplaza con la URL de tu backend

interface TemplateData {
  user_id: number
  name: string
  notion_url: string
  course_id: number
}

// Define una interface para los cursos
interface Course {
  id: number
  name: string
}

// Arreglo de cursos de ejemplo, reemplaza con tus datos reales
const courses: Course[] = [
  { id: 1, name: 'Ecuaciones Diferenciales' },
  { id: 2, name: 'Probabilidad' },
  { id: 3, name: 'Matemáticas Avanzadas' },
  // Agrega más cursos...
]

export default function Upload() {
  const navigation = useRouter()
  const [name, setName] = useState('')
  const [notionUrl, setNotionUrl] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null) // Guarda el curso seleccionado
  const [userId, setUserId] = useState<number>(0)

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!selectedCourse) {
        alert('Por favor, selecciona un curso')
        return
      }
      const templateData: TemplateData = {
        user_id: userId,
        name,
        notion_url: notionUrl,
        course_id: selectedCourse.id, // Usa el id del curso seleccionado
      }

      const response = await axios.post(
        `${BASE_URL}/upload_template`,
        templateData
      )
      console.log(response.data) // Muestra el mensaje de éxito
      navigation.push('/dashboard') // Redirige usando navigation.push
    } catch (error) {
      console.error('Error al subir el template:', error)
      // Mostrar un mensaje de error al usuario
    }
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-4xl mb-4">Subir</h1>
        <p className="text-white text-lg mb-8 max-w-md">
          Sube tus archivos para compartirlos
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Nombre del template:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-100 text-gray-700"
              placeholder="Nombre del template"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notionUrl" className="block text-gray-700 mb-2">
              URL de Notion:
            </label>
            <input
              type="text"
              id="notionUrl"
              value={notionUrl}
              onChange={(e) => setNotionUrl(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-100 text-gray-700"
              placeholder="URL de Notion"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block text-gray-700 mb-2">
              Nombre del curso:
            </label>
            <select
              id="course"
              value={selectedCourse?.id || ''} // Muestra el id del curso seleccionado
              onChange={(e) => {
                const selectedCourseId = parseInt(e.target.value, 10)
                setSelectedCourse(
                  courses.find((c) => c.id === selectedCourseId) || null
                )
              }}
              className="w-full px-3 py-2 rounded bg-gray-100 text-gray-700"
            >
              <option value="">Selecciona un curso</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <Link href="/dashboard">Subir</Link>
          </button>
        </form>
      </div>
    </MainLayout>
  )
}
