import React, {useState, useContext,} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'

const HomePage = () => {
  const auth = useContext(AuthContext)
  const {loading, request, error} = useHttp()
  const [form, setForm] = useState({
    login: '', password: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/signin', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div>
      <h2>HomePage</h2>

      <div className="form-content">
        <div>
          <label>Login: </label>
          <input
            placeholder="Login"
            id="login"
            type="text"
            name="login"
            value={form.login}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <button
          disabled={form.login.length==0 || form.password.length==0}
          onClick={loginHandler}
        >
          sign in
        </button>
      </div>
    </div>
  )
}

export default HomePage