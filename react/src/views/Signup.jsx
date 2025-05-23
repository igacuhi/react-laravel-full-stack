import {Link} from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";


export default function signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext();
    
    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                console.log(response.data.errors);
            }
        })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Signup for free
                    </h1>
                    <input  ref={nameRef} placeholder="Full Name" />
                    <input  ref={emailRef}    type="email"     placeholder="Email Address" />
                    <input ref={ passwordRef}   type="password"  placeholder="password" />
                    <input ref={passwordConfirmationRef}   type="password"  placeholder="password Confirmation" />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already Registering?  <Link to="/auth/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}