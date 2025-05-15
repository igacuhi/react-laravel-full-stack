import { useStateContext } from "../contexts/ContextProvider";

export default function Login() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <input type="email"     placeholder="Email" />
                    <input type="password"  placeholder="password" />
                    <button className="btn btn-block">Login</button>
                </form>
            </div>
        </div>
    )
}