import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        setUser({username , password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input className="input" type='text' value={username} placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input className="input" type='text' value={password} placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
