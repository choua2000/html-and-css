import React from 'react'
import { useState } from 'react'
import axios from axios
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password:''
    })
    const handleSubmit = (event) =>{
        event.preventDefault(
            axios.post('https://localhost: 7000')
            .then(result => console.log(result))
            .catch(err => console.log(err))
        )
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-100 border loginForm'>
            <h2> Login Page</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" name='email' autoComplete='off' placeholder='Enter email' 
                onChange={(e) => setValues({...values, email : e.target.value})}
                className='form-control' rounded-0/>
              </div>
              <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" name='password' autoComplete='off' placeholder='Enter password'
                onChange={(e) => setValues({...values, password : e.target.value})} 
                className='form-control' rounded-0/>
              </div>
              <button className='btn btn-success w-100 rounded-0 mb-2'>Submit</button>
              <div className='mb-1'>
                <input type="checkbox" name="tick" id='click'></input>
                <label htmlFor='password'> You are agree with terms & consitions</label>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Login