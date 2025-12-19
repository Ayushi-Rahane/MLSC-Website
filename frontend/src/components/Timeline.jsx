import React from 'react'

export default function Timeline({ items = [] }) {
  return (
    <ol className="border-l-2 border-gray-200 ml-4">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6 ml-6">
          <span className="text-sm text-gray-500">{it.date}</span>
          <h4 className="font-semibold">{it.title}</h4>
          <p className="text-gray-700">{it.description}</p>
        </li>
      ))}
    </ol>
  )
}
