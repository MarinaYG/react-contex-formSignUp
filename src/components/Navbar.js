import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import {Link} from "react-router-dom"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase-config"

export default function Navbar(){

    const {toggleModals} = useContext(UserContext)

    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")

        } catch {
            alert("for some reason check your network again")
        }

    }

return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to="/" className="navbar brand">
             AuthJS
        </Link>
    
        <div>
            <button onClick={()=> toggleModals("signUp")}
            className="btn btn-primary"> sign up </button>
            <button onClick={()=> toggleModals("signIn")}
            className="btn btn-primary ms-4"> sign In </button>
            <button 
            onClick={logOut}
            className="btn btn-danger ms-4"> log out </button>

        </div>
    </nav>
)
}