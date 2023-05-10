import { React, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Logo from '../img/bl.png'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [err, setError] = useState(null)

  const handleChange = e => {
    const name = e.target.name
    const val = e.target.value
    setInputs(prev => ({
      ...prev,
      [name]: val
    }))
  }

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/auth/register', inputs, config)
      navigate('/login')
    } catch (error) {
      console.log(error)
      setError(error.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          required
          name='username'
          type='text'
          placeholder='Username'
          onChange={handleChange}
        />
        <input
          required
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          required
          name='password'
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />

        <button type='submit' className='butt' onClick={handleSubmit}>
          Register
        </button>
        {err && <p>{err}</p>}
        <span>
          Already have an account?{' '}
          <Link to='/login' className='link loginBut'>
            Login
          </Link>
        </span>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
