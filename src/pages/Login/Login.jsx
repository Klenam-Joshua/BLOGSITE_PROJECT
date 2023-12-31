import styles from "./Login.module.css";
import { useState } from "react";

//images
import Logo from "../../assets/images/aLogo.png"


// ======== other components========
import FormsWrapper from "../../Components/formsWrapper/formsWrapper";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";

//  custom hooks
import { useLogin } from "../../Hooks/useLogin";



export default function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const { isLoading, error, loginUser } = useLogin()


    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: userEmail,
            password: userPassword
        }

        loginUser(data)





    }

    return (
        <FormsWrapper>
            <div className={styles.login_form_wrapper} >

                <div className={styles.logo_wrapper}>
                    <img src={Logo} alt="brandLogo" />
                </div>
                <h2 className="text-center">Sign in</h2>
                <form onSubmit={handleLogin}>
                    {error && <p className="text-center" style={{ color: "red", marginTop: "1rem", fontSize: "1.3rem" }}> {error}</p>}
                    <div className={styles.field_wrapper}>
                        <fieldset>
                            <legend> email *</legend>
                            <input
                                onChange={e => setUserEmail(e.target.value)}
                                value={userEmail}
                                type="email" id="email_field" required />
                        </fieldset>
                    </div>
                    <div className={styles.field_wrapper}>
                        <fieldset>
                            <legend> password *</legend>
                            <input
                                onChange={e => setUserPassword(e.target.value)}
                                value={userPassword}
                                type="password" id="password_field" required />
                        </fieldset>
                    </div>
                    <a href="#"  > Forgot password?</a>
                    <button type="submit"


                        disabled={isLoading ? true : false}>
                        {isLoading ? <LoadingAnim /> : "Login"}
                    </button>
                </form>
            </div>
        </FormsWrapper>
    )
}
