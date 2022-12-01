import mongoose from 'mongoose'

const inmuebleSchema = new mongoose.Schema({
  inmuebleType: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  price: {
    type: Number
  }
})

const inmuebleModel = mongoose.model('Inmueble', inmuebleSchema)
// export default mongoose.model('Inmueble', inmuebleSchema)
export default inmuebleModel