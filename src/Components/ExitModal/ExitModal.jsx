import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { MdModeComment } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";


///styles

import styles from "./ExitModal.module.css"


const ExitModal = () => {

    
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
        {
            icon:<MdExitToApp/>,
            name:"Sign out",
            location:"/Sign-out",
        }
    ]

  return (
  
        <div className={styles.profile_links}>
              
                <ul>
                  {
                   profile_links.map((link,id)=>(
                           <li>
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
                </ul>
        </div>
  )
  
}

export default ExitModal
