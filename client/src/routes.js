import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { ArticlesPage, HomePage } from './pages'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/articles" exact>
          <ArticlesPage />
        </Route>
        <Redirect to="/articles" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}