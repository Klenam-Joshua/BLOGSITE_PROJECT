import styles from "./Login.module.css";

//images
import Logo from "../../assets/images/logo.png"
// ======== other components========
import FormsWrapper from "../../Components/formsWrapper/formsWrapper";


export default function Login() {
  return (
          <FormsWrapper>
                     <div className={styles.login_form_wrapper} >
                         <div className={styles.logo_wrapper}>
                               <img src={Logo} alt="brandLogo" />
                         </div>
                          <h2 className="text-center">Sign in</h2>
           <form>
                 <div className={styles.field_wrapper}>
                         <fieldset>
                               <legend> email *</legend>
                               <input type="email"  id="email_field" />
                         </fieldset>
                 </div>
                 <div className={styles.field_wrapper}>
                         <fieldset>
                               <legend> password *</legend>
                               <input type="password"  id="password_field" />
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
