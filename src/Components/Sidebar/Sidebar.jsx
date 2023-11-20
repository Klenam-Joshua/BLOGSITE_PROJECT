import React from 'react'

//--------css -------
import   styles from "./Sidebar.module.css"

// images
import Logo from "../../assets/images/Logo.png"

// icons
import { FiMenu } from "react-icons/fi";


// components
import MenuList from '../MenuList/MenuList';



const Sidebar = ({children}) => {
  return (
        <>
             <aside  id='sidbar'  className={styles.sidbar} >
              <div className="row  justify-between">
                    <div id="logo_container"  className={styles.logo_container}>
                           <img src={Logo} alt="brand_logo" />
                    </div>
                     <div>
                   
                     </div>
                    <div className={styles.menu_icon_con}> 
                        
                          <FiMenu className={styles.menu_icon}/>
                    </div>
              </div>

              {/* ======= navLink ==== */}

              <nav>
                    <MenuList/>
              </nav>
             </aside>
             {children}
        </>
  )
}

export default Sidebar
