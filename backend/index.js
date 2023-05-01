const express = require('express')
const connectToMongoDB = require('./db')
const app = express()
const cors = require('cors')
// hey this 
const port = 5000
connectToMongoDB()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('!')
})
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`InoteBook Backend running at http://localhost:${port}`)})