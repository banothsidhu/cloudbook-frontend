const express = require('express')
const connectToMongoDB = require('./db')
const app = express()
// hey this 
const port = 5000
connectToMongoDB()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello Harry!')
})
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})