import {Link} from "react-router-dom";

export default function signup() {

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Signup for free
                    </h1>
                    <input type="password"  placeholder="Full Name" />
                    <input type="email"     placeholder="Email Address" />
                    <input type="password"  placeholder="password" />
                    <input type="password"  placeholder="password Confirmation" />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already Registering?  <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}