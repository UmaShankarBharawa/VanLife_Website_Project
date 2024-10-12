import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        e.preventDefault()
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(e.target.name)
    }
    // console.log("User:", formData.email)
    // console.log("Password:", formData.password)

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form className="login--form">
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Email address"
                    onChange={handleChange}
                    className="email"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    className="password"
                    required
                />
                <button className="login-btn">Sign In</button>
            </form>
            <p>Don't have an account? <Link className="create-account">Create one now</Link></p>
        </div>
    )
}
