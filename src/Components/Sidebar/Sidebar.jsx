import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//--------css -------
import   styles from "./Sidebar.module.css"

//  ==================  images =============
import Logo from "../../assets/images/Logo.png"
import avatar from "../../assets/images/avatar.png"


//  ===============  icons ============ 
import { FiMenu } from "react-icons/fi";



// ==================== components ===============
import MenuList from '../MenuList/MenuList';




//===================== custom Hooks ==========
 import { useSettinsContext } from '../../Hooks/useSettingsContext';


const Sidebar = ({children}) => {

    const {dispatch, sidebarIsOpen} = useSettinsContext();

  




  return (
        <>
             <aside  id='sidbar'  className={sidebarIsOpen ? styles.sidebar : `${styles.sidebar}  ${styles.view}` } >
              <div className="row  justify-between">
                    <div id="logo_container"  className={styles.logo_container}>
                           <img src={Logo} alt="brand_logo" />
                    </div>
                             
                    <div 
                    className={styles.menu_icon_con}>                     
                           <span  onClick={()=>dispatch({type:"OPEN_SIDEBAR"})}>
                              <FiMenu className={styles.menu_icon}/>
                           </span>
                    </div>
              </div>
         
                  <h2  className='text-center'  id={styles.title}>
                      DASHBOARD    
                  </h2>
                  <p className='text-center' >create your unique blog</p>
                                      {/*  =========== user profile ============= */}

                                      <div className={styles.user_profile_container}>
                               <div className={styles.profile_image_container}>
                                       <img src={avatar} alt="user_avatar" />
                               </div>
                                <h3>
                                          Klenam                             
                                </h3>                               

                     </div>


                       {/*=============== Menu list  ================ */}

              {/* ======= navLink ==== */}

              <nav  className={styles.menu_container}>
                 <Link  to="/create-post"   className={styles.new_blog_btn} id='new_blog_btn'> 
                     Create new blog  
                  </Link> 
                                  
                    <MenuList/>
              </nav>
             </aside>
             {children}
        </>
  )
}

export default Sidebar
