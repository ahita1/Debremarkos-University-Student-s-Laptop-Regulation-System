const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
