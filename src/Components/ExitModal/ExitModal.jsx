import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { MdModeComment } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";


///styles

import styles from "./ExitModal.module.css"

// ====== custom hook ==========

import { useLogout } from "../../Hooks/useLogout";


const ExitModal = () => {

    const {logoutUser}  = useLogout()



 const handleLogout = ()=>{
       logoutUser()
 }





    
    const profile_links = [
        {
            icon:<FaRegUserCircle/>,
            name:"My Profile",
            location:"/My Profile",
        },
        {
            icon:<MdModeComment/>,
            name:"comments",
           location:"/comments",
        },

    ]

  return (
  
        <div className={styles.profile_links}>
              
                <ul>
                  {
                   profile_links.map((link,id)=>(
                           <li key={link + id}
                         
                           >
                                <Link to={link.location} >
                                     <span>
                                         {link.icon}
                                     </span>
                                    <span>
                                       {link.name}
                                    </span>
                               </Link>
                               
                           </li>
                           
                   ))
                  }
                  

                  <li    onClick={handleLogout}>
                  <Link to="#" >
                                     <span>
                                         <MdExitToApp/>
                                     </span>
                                    <span>
                                       Logout
                                    </span>
                               </Link>
                  </li>
                </ul>
        </div>
  )
  
}

export default ExitModal
