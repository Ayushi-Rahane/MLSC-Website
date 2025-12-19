import React from 'react'
import achievements from '../data/achievements.json'

export default function Achievements() {
  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Achievements</h1>
      <ul className="space-y-3">
        {achievements.map((a, i) => (
          <li key={i} className="p-4 bg-white rounded shadow">
            <h4 className="font-semibold">{a.title}</h4>
            <p className="text-sm text-gray-600">{a.year}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
