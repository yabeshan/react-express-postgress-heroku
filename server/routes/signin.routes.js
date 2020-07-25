import JWT from 'jsonwebtoken'
import express from 'express'
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const userId = 'userId'
    const jwtSecret = 'jwtSecret'
    const token = JWT.sign(
      { userId: userId },
      jwtSecret,
      { expiresIn: '1d' }
    )
    res.status(200).json({ userId: userId,  token })

  } catch (e) {
    res.status(500).json({ 
      message: 'Backend Error' 
    })
  }
})

export default router