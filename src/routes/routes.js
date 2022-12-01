import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('app route working')
})



export default router