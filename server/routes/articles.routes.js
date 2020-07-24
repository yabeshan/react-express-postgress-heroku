//2) GET /articles — требует авторизации по токену, запрос пустой, ответ — список статей. Статья — простой объект из заголовка и текста.

const {Router} = require('express')
const router = Router()

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

module.exports = router