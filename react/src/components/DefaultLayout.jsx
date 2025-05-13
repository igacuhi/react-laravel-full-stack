import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const{user,token} = useStateContext()

    if (!token) {

        return <Navigate to="/login" />
    }

    return (
        <div id="defaultLayout">
            <aside>
                <link to="/dashboard">Dashboard</link>
                <link to="/users">Users</link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        User info
                    </div>
                </header>
            </div>
            <Outlet />
        </div>
    )
}