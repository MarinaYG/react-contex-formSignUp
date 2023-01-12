import { async } from "@firebase/util";
import { useContext, useRef, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom";


export default function SignUpModal() {
    const { modalState, toggleModals, signUp } = useContext(UserContext)

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }

    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault();

        if ((inputs.current[1].value.length || inputs.current[2].value.length)
            < 6) {
            setValidation("not more than 6")
            return;
        }
        else if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation("password not match")
            return;
        }

        try{

            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset();
            setValidation("")
            toggleModals("close")
            navigate("/private/userHome")

        } catch(err){
            //console.dir(err.message)
            if(err.code === "auth/invalid-email"){
                setValidation("email format invalid")
            }
            else if(err.code === "auth/email-already-in-use"){
                setValidation("email already use")
            }
        }
    }
        const closeModal = () => {
            toggleModals("close")
            setValidation("")
        }
   

    return (
        <>
            {modalState.signUpModal && (
                <div className="position-fixed top-0 vw-100 vh-100">
                    <div
                        onClick={closeModal}
                        className="w-100 h-100 bg-dark bg-opacity-75">
                    </div>
                    <div className="position-absolute top-50 start-50 
                    translate-middle" style={{ minWidth: "400px" }}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title text-light">Sign Up</h5>
                                    <button onClick={closeModal}
                                        className="btn-close"></button>
                                </div>

                                <div className="modal-body">
                                    <form
                                        ref={formRef}
                                        onSubmit={handleForm}
                                        className="sign-up-form">
                                        <div className="mb-3 text-light">
                                            <label htmlFor="sign-up-form" className="form-label">Email address</label>
                                            <input
                                                name="email" required
                                                type="email" className="form-control"
                                                id="signUpEmail"
                                                ref={addInputs} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="signUpPwd" className="form-label">password</label>
                                            <input name="pwd" required
                                                type="password" className="form-control"
                                                id="signUpPwd"
                                                ref={addInputs} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="repeatPwd" className="form-label">Repeat password</label>
                                            <input name="pwd" required
                                                type="password" className="form-control"
                                                id="repeatPwd"
                                                ref={addInputs} />
                                            <p className="text-danger mt-1">{validation} </p>
                                        </div>


                                        <button className="btn btn-primary">Submit</button>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}