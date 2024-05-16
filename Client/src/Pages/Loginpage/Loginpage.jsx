import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Loginpage() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate() 

    const LoginUser = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
            email: email,
            password: password
            })
            console.log(response.data.data)
            localStorage.setItem('userLogged', JSON.stringify(response.data.data))
            //show success message only if the login attempts is successful
            alert('Login successful')
            navigate('/')
        } catch (error) {
            alert('invalid email or password please try again')
        }
    }
    return (
        <div className='container'>
            <form className='form'>
                <h3 className='heading-tags'>Login</h3>

                {/* <label>Username:</label>
                <input type='text' placeholder='enter your name' onChange={(e) => setUsername(e.target.value)} /> */}

                <label>Email</label>
                <input type='text' placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type='password' placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} />

                <button class="sub" onClick={LoginUser} type='submit'>Login</button>
            </form>

        </div>
    )
}
