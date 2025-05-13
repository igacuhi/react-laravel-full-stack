import { createContext, useContext, useState  } from "react"

const StateContext = createContext( {
user: null,
token: null,
setuser: () => {},
setToken: () => {}
})

export const ContextProvider = ({ children }) => {
    const [user,setuser] = useState({});
    const [token,_settoken] = useState(localStorage.getItem('ACCESS_TOKEN'));}

const setToken = (token) => {
    _settoken(token);
    if (token) {
        localStorage.setItem('ACCESS_TOKEN',token);
    }
    else {
        localStorage.removeItem('ACCESS_TOKEN');
    }
    return (
        <StateContext.Provider value={{
            user,
            token,
            setuser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);