import React, { useState, useContext, useEffect, useCallback } from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'

const ArticlesPage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {token, userId} = useContext(AuthContext)
  const [articles, setArticles] = useState([])
  const {loading, request, error} = useHttp()

  const refreshArticles = async () => {
    setArticles([])
    fetchArticles()
  }

  const fetchArticles = useCallback( async () => {
    console.log('send')
    try {
      const data = await request('/api/articles?userId='+userId, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setArticles(data.articles)
    } catch (e) {}
  }, [token, userId, request])

  const logoutHandler = () => {
    auth.logout()
    history.push('/')
  }
  
  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <div>
      <button onClick={logoutHandler} style={{float:'right'}}>Logout</button>
      <h2>ArticlesPage</h2>
      
      <button onClick={refreshArticles}>Refresh</button>
      <br/>    
      {articles.length==0 && "Loading..."}
      {articles.length>0 && 
        articles.map((article, index) => 
          <p key={index}><b>{article.title}</b><br/> {article.text}</p>
        )
      }
    </div>
  )
}

export default ArticlesPage