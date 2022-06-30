import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "./Firebase/Auth";

function Header() {
    const { currentUser } = useContext(AuthContext);
    return (
        <ul className="flex ml-auto p-5 w-full justify-center align-middle font-bold box-shadow">
            <li className="text-xs text-gray-800 mr-6 border-b-2 border-blue-700 cursor-pointer">Weather</li>
            <li className="text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-blue-700">Alerts</li>
            <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-blue-700">Map</li>
            <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-blue-700">
                {currentUser ?
                    <Link
                        to="/login"
                    >
                        Logout
                    </Link>
                    :
                    <Link
                        to="/login"
                    >
                        Login
                    </Link>}
            </li>
            <li className="text-xs text-gray-800 cursor-pointer border-b-2 hover:border-blue-700">
                {!currentUser && <Link
                    to="/signup"
                >
                    Register
                </Link>}
            </li>
        </ul>
    )
}

export default Header
