import styles from "./Invoice.module.css";

//========  images

//import Logo from "../assets/img/theme/gra.png";
//import Content_image from "../assets/img/theme/image.png"
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function InvoiceVerification() {
  return (
    <div   className={styles.invoice_verification_container}  >
            <header  className={styles.header}>
                        <div  className={styles.logo_container}>
                            {/* <img src={Logo}  alt="brand_logo"/> */}

                        </div>
            </header>
            
            <div className={styles.form_container}>
                        <h1>
                                 Invoice Verification App
                        </h1>
                          <form>
                                   <div className={styles.form_content_wrapper}>
                                           
                                               {/* QR CODE SECTION */}
                                         <div className= {styles.invoice_section}>
                                                     <div   className={styles.section_header}>
                                                                  <h1>
                                                                       QR-CODE
                                                                 </h1>
                                                     </div>
                                                     <div className={styles.content_section}  id={styles.content_section1} >
                                                               
                                                                 <span>
                                                             <FaCheck/>
                                                             </span>

                                                             
                                                               
                                                     </div>
                                                     <div className={styles.footer_section}>
                                                     <button 
                                                     
                                                     className="btn btn-primary w-100 waves-effect waves-float waves-light" name="Input.Button"  tabindex="4">
                                                        
                                                     Scan QR-CODE
                                                     </button>
                                                       
                                                     </div>

                                         </div>
                                               
                                               {/* HEADER SECTION */}
                                         <div className= {styles.invoice_section}>
                                                    <div   className={styles.section_header}>
                                                                <h1>
                                                                   INVOICE-HEADER
                                                                 </h1>
                                                   </div>
                                                   <div className={styles.content_section}>
                                                                
                                                             
                                                     </div>
                                                     <div className={styles.footer_section}>

                                                         <button 
                                                         type="button"
                                                         class="btn btn-primary w-100 waves-effect waves-float waves-light" name="Input.Button" value="login" tabindex="4">
                                                        
                                                           Take Picture
                                                        </button>
                                                     
                                                     </div>

                                 
                                         </div>

                                             {/* fOOTER SECTION */}
                                         <div className= {styles.invoice_section}>
                                                   <div   className={styles.section_header}>
                                                                 <h1>
                                                                    INVOICE-FOOTER
                                                                 </h1>
                                                   </div>

                                                   <div className={styles.content_section}>
                                                                
                                                     </div>
                                                     <div className={styles.footer_section}>
                                                     <button 
                                                     type="button"
                                                     className="btn btn-primary w-100 waves-effect waves-float waves-light" name="Input.Button" value="login" tabindex="4">
                                                        
                                                        Take Picture
                                                     </button>
                                                     
                                                     </div>
                                         </div>
                                        
                       
                                    </div>

                                    <div className={styles.sbtn_container}>
                                                <button 
                                                type="submit"
                                                className="btn btn-primary  waves-effect waves-float waves-light" name="Input.Button" value="login" >
                                                        
                                                        submit
                                                     </button>
                                            </div>  
                         </form>
           
                   
            </div>

                
      
    </div>
  )
}
