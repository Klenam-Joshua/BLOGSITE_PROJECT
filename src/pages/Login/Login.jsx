import styles from "./Login.module.css";


// ======== other components========


export default function Login() {
  return (
    <div className={styles.login_form_wrapper} >
           <form>
                 <div className="field_wrapper">
                         <fieldset>
                               <legend> email *</legend>
                               <input type="email"  id="email_field" />
                         </fieldset>
                 </div>
                 <div className="field_wrapper">
                         <fieldset>
                               <legend> password *</legend>
                               <input type="password"  id="password_field" />
                         </fieldset>
                 </div>

                 <button type="submit">
                      Login
                 </button>
           </form>
    </div>
  )
}
