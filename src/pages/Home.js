import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function Home(){

    const {currentUser} = useContext(UserContext)
    return (
        <div className="container p-5">
            <h1 className="display-2 text-light">
                {currentUser? "welcome to our member" : "please log in or sign up"}
            </h1>
        </div>
    )
}
