import {createContext} from 'react'

function noop() {
  console.log('____noop____')
}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})