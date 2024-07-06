import React from 'react'
import Link from 'next/link'

export default function WFriends() {
  const lastestSummaries = [
    // title, author, course, date, url
    {
      title: 'Resumen de ecuaciones diferenciales',
      author: 'Alejandro Grimaldo',
      course: 'Ecuaciones diferenciales',
      date: '2021-09-01',
      url: 'https://www.notion.so/Resumen-de-ecuaciones-diferenciales-1b2c7a6b3c2f4c7b9c7a6b3c2f4c7b9',
    },
    {
      title: 'Resumen de probabilidad',
      author: 'Alan',
      course: 'Probabilidad',
      date: '2021-09-01',
      url: 'https://www.notion.so/Resumen-de-probabilidad-1b2c7a6b3c2f4c7b9c7a6b3c2f4c7b9',
    },
    {
      title: 'Resumen de matemáticas avanzadas',
      author: 'Fernando',
      course: 'Matemáticas avanzadas',
      date: '2021-09-01',
      url: 'https://www.notion.so/Resumen-de-matem-ticas-avanzadas-1b2c7a6b3c2f4c7b9c7a6b3c2f4c7b9',
    },
    // {
    //   title: 'Resumen de estructuras discretas',
    //   author: 'Fernando',
    //   course: 'Estructuras discretas',
    //   date: '2021-09-01',
    //   url: 'https://www.notion.so/Resumen-de-estructuras-discretas-1b2c7a6b3c2f4c7b9c7a6b3c2f4c7b9',
    // },
  ]

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">Últimos resúmenes</h2>
        <div className="grid grid-cols-3 gap-2 ">
          {lastestSummaries.map((summary) => (
            <div
              key={summary.title}
              className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10"
            >
              <h3>{summary.title}</h3>
              <p>Author: {summary.author}</p>
              <p>Course: {summary.course}</p>
              <p>Date: {summary.date}</p>
              <Link
                href={summary.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                {/* Usa Link de react-router-dom */}
                Ver resumen
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
