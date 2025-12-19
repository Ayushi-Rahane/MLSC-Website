const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

// TODO: Add API routes here. Scaffolded for future backend work.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Example placeholder route group
const router = express.Router()
router.get('/', (req, res) => res.json({ message: 'Welcome to MLSC API' }))
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`MLSC backend listening on http://localhost:${PORT}`)
})
