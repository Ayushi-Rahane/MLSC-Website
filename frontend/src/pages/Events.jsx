import React from 'react'
import Timeline from '../components/Timeline'
import { events } from "../data/events.js";

export default function Events() {
  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <Timeline items={events} />
    </section>
  )
}
