import React from 'react'

interface Friend {
  name: string
  description: string
  university: string
}

export default function Friend({ friend }: { friend: Friend }) {
  return (
    <div
      key={friend.name}
      className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-60 p-10 text-center"
    >
      <p className="text-gray-800 mt-2">{friend.name}</p>
      <p className="text-gray-600 mt-2">{friend.description}</p>
      <p className="text-gray-600 mt-2">{friend.university}</p>
    </div>
  )
}
