import styles from "./Login.module.css";

//images
import Logo from "../../assets/images/logo.png"
// ======== other components========
import FormsWrapper from "../../Components/formsWrapper/formsWrapper";
import { useState } from "react";


export default function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
         userEmail,
         userPassword
     }
   
  
}

  return (
          <FormsWrapper>
                     <div className={styles.login_form_wrapper} >
                         <div className={styles.logo_wrapper}>
                               <img src={Logo} alt="brandLogo" />
                         </div>
                          <h2 className="text-center">Sign in</h2>
           <form  onSubmit={handleSubmit}>
                 <div className={styles.field_wrapper}>
                         <fieldset>
                               <legend> email *</legend>
                               <input
                                onChange={e=>setUserEmail(e.target.value)}
                                value={userEmail}
                               type="email"  id="email_field"  required/>
                         </fieldset>
                 </div>
                 <div className={styles.field_wrapper}>
                         <fieldset>
                               <legend> password *</legend>
                               <input
                               onChange={e=>setUserPassword(e.target.value)}
                               value={userPassword}
                                type="password"  id="password_field"  required/>
                         </fieldset>
                 </div>
             <a href="#"  > Forgot password?</a>
                 <button type="submit">
                      Login
                 </button>
           </form>
    </div>
          </FormsWrapper>
  )
}
