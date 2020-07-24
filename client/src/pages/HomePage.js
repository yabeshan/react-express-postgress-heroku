import React, {useState} from 'react'

import {useHttp} from '../hooks/http.hook'

const HomePage = () => {
  const [articles, setArticles] = useState([])
  const {loading, request, error} = useHttp()

  const fetchArticles = async () => {
    try {
      // const data = await request('/api/signin', 'POST')
      // console.log ('backend get data = ', data )
      const data = await request('/api/articles', 'GET')
      setArticles(data.articles)
    } catch (e) {}
  }

  return (
    <div>
      HomePage
      <button onClick={fetchArticles}>Click</button>
      
      {articles.length==0 && "Статей нету"}
      {articles.length>0 && 
        articles.map((article, index) => 
          <p key={index}>{article}</p>
        )
      }
    </div>
  )
}

export default HomePage