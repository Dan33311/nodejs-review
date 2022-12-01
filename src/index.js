//ECMAScript module, old method -> commonjs
import express from 'express'
import mongoose from 'mongoose'
import inmuebleModel from './db/model.js'
// import router from './routes/routes.js' // need to specify the file extension

const app = express()

// TODO: use the correct value in <password>
const DB_URI = 'mongodb+srv://user_3311:<password>@cluster0.ws1hw.mongodb.net/dandbnov2022?retryWrites=true&w=majority'

const connectDB = async() => {
  try {
    await mongoose.connect(DB_URI)
    console.log('Database connected !');
  } catch (error) {
    console.log(`db error ${error}`);
  }
}

connectDB()

app.use(express.json())

app.get('/', async (req, res) => {
  const inmuebles = await inmuebleModel.find({})
  res.json(inmuebles)
})

app.post('/new', async (req, res) => { // Postman -> POST -> Body -> raw & json
  let inmueble = await inmuebleModel(req.body)
  inmueble = await inmueble.save()
  res.send(inmueble)
})

app.listen(3000, () => {
  console.log('App running !')
})


//mongodb+srv://user_3311:<password>@cluster0.ws1hw.mongodb.net/?retryWrites=true&w=majority