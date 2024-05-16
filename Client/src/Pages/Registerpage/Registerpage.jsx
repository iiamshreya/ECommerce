import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Registerpage() {
    const[username,setUsername]= useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()

    const RegisterUser = async(e) =>{
        e.preventDefault()
        const response = await axios.post('http://localhost:3000/api/v1/user/register',{
            email:email,
            password:password,
            username:username
        })
        console.log(response)
        navigate('/login')
    }
  return (
    <div className='container'>
        <form className='form'>
            <h3 className='heading-tags'>Register</h3>
<br />
            <label>Username:</label>
            <input type='text' placeholder='enter your name' onChange={(e) =>setUsername(e.target.value)} />
            <br />
            <label>Email</label>
            <input type='text' placeholder='enter your email' onChange={(e) =>setEmail(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type='password' placeholder='enter your password'onChange={(e) =>setPassword(e.target.value)} />
<br />
            <button class="sub"onClick={RegisterUser} type='submit'>Register</button>
        </form>
      
    </div>
  )
}
