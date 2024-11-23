import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const message = useLoaderData()


    // const [loginData, setLoginData] = useState()
    // console.log(loginData.user)


    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(formData)
            .then(data => console.log(data))
            .catch(err=> setError(err))
            .finally(()=> setStatus("idle"))
    }

    function handleChange(e) {
        const { name, value } = e.target
        e.preventDefault()
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
        // console.log(e.target.value)
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login--form">
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
                <button disabled={status === "submitting"} className="login-btn">
                    {status === "submitting" ? "Signing In..." : "Sign In"}
                </button>
            </form>
            <p>Don't have an account? <Link className="create-account">Create one now</Link></p>
        </div>
    )
}
