import { Form, Link, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"
    try {
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin", true)
        return redirect(pathname)
    } catch (err) {
        return err.message
    }
}


export default function Login() {

    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <Form
                method="post"
                className="login--form"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="email"
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="password"
                    required
                />
                <button type="submit" disabled={navigation.state === "submitting"} className="login-btn">
                    {navigation.state === "submitting" ? "Signing In..." : "Sign In"}
                </button>
            </Form>
            <p>Don't have an account? <Link className="create-account">Create one now</Link></p>
        </div>
    )
}
