import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WFriends() {
  const lastestSummaries = [
    // title, author, course, date, url
    {
      title: 'Resumen de ecuaciones diferenciales',
      author: 'Alejandro',
      course: 'Ecuaciones diferenciales',
      date: '2021-09-01',
      url: 'https://puffy-pan-a1d.notion.site/Ecuaciones-Diferenciales-424f30b44d624966913a6fa1a821acf7',
      image: '/ecuaciones.jpg',
    },
    {
      title: 'Resumen de probabilidad',
      author: 'Ruy',
      course: 'Matemáticas avanzadas',
      date: '2021-09-01',
      url: 'https://puffy-pan-a1d.notion.site/Matem-ticas-Avanzadas-2b663830df3f42cebb164e3833a0b8c8',
      image: '/mates.jpg',
    },
    {
      title: 'Resumen de matemáticas avanzadas',
      author: 'Bruno',
      course: 'Matemáticas avanzadas',
      date: '2021-09-01',
      url: 'https://www.notion.so/Resumen-de-matem-ticas-avanzadas-1b2c7a6b3c2f4c7b9c7a6b3c2f4c7b9',
      image: '/mates.jpg',
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
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="col-span-2 bg-white rounded-md p-4 bg-opacity-60 m-3">
        <h2 className="text-gray-800 font-bold mb-2">
          Últimos resúmenes de mis amigos
        </h2>
        <div className="grid grid-cols-3 gap-2 ">
          {lastestSummaries.map((summary) => (
            <Link href={summary.url} target="_blank" rel="noopener noreferrer">
              <div
                key={summary.title}
                className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10"
              >
                <Image
                  src={summary.image}
                  alt={summary.title}
                  key={summary.title}
                  width={100}
                  height={100}
                  // redondear
                  className="rounded-full"
                />
                <h3>{summary.title}</h3>
                <p>Author: {summary.author}</p>
                <p>Course: {summary.course}</p>
                <p>Date: {summary.date}</p> {/* Usa Link de react-router-dom */}
                Ver resumen
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
