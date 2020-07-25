//2) GET /articles — требует авторизации по токену, запрос пустой, ответ — список статей. Статья — простой объект из заголовка и текста.

import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const userId = req.query && req.query.userId
    const token = req.get("authorization")

    if (!userId || !token) {
      res.status(401).send("Authorization Required")
    }

    const articles = [
      {title:'Title 1', text:'Article 1'},
      {title:'Title 2', text:'Article 2'},
      {title:'Title 3', text:'Article 3'}
    ]
    res.status(200).json({ 
      articles: articles,
      userId: userId
    })
  } catch (e) {
    res.status(500).json({ 
      message: 'Backend Error' 
    })
  }
})

export default router