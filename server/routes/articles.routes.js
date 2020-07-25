//2) GET /articles — требует авторизации по токену, запрос пустой, ответ — список статей. Статья — простой объект из заголовка и текста.

import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({ 
      articles: ["Article 1", "Article 2", "Article 3"] 
    })
  } catch (e) {
    res.status(500).json({ 
      message: 'Backend Error' 
    })
  }
})

export default router