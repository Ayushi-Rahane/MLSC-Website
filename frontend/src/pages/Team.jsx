import React from 'react'
import team from '../data/team.json'

export default function Team() {
  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((m, i) => (
          <div key={i} className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
