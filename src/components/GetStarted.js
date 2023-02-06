import { React, useState, useEffect, useTransition } from "react";
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [email1, setEmail1] = useState("")
    const [password1, setPassword1] = useState("")
    const navigate = useNavigate()



    const handleSignup = async () => {
        let result = await fetch('http://localhost:9595/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        result = await result.json()
        localStorage.setItem("user", JSON.stringify(result))
        console.log(result)
        navigate("/")
    }

    const handleLogin = async () => {
        console.log(email1, password1);
        let result = await fetch('http://localhost:9595/login', {
            method: 'post',
            body: JSON.stringify({ email1, password1 }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        result = await result.json();
        console.log(result.name)
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/')
        } else {
            alert("Nikal")
        }
    }
    return (
        <section>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignup}>
                        <h1>Sign Up</h1>
                        <span>Registration</span>
                        <label><input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /></label>
                        <label><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                        <label><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
                        <br />
                        <button onClick={handleSignup} type="button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLogin}>
                        <h1>Sign in</h1>
                        <span>Login in</span>
                        <label><input type="text" placeholder="Email" value={email1} onChange={(e) => setEmail1(e.target.value)} /></label>
                        <label><input type="password" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)} /></label>
                        <a href="/">Forgot your password?</a>
                        <br />
                        <button onClick={handleLogin} type="button">Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;