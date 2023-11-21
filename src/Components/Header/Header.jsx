// icons
import { MdModeComment } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { RiFontSize } from "react-icons/ri";
import { MdOutlineZoomOutMap } from "react-icons/md"
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

import { useState } from "react";

import { Link } from "react-router-dom";


//image
import avatar from "../../assets/images/avatar.png"

// styles
import styles from "./Header.module.css";


//other components

import ExitModal from "../ExitModal/ExitModal";


const Header = ({}) => {

    const [openProfile, setOpenProfile] = useState(false)
  return (
          <header  className={styles.page_header}>
                 <div className={styles.header_section_1}>
                        <span >
                               <MdOutlineChatBubbleOutline className={styles.header_icon}/>
                        </span>
                        <span >
                         <FaUsers className={styles.header_icon} />
                        </span>
                 </div>
                 <div className={styles.header_section_2} id="header_section_2">
                            <div className={styles.action_icons}>
                              <span className={styles.font_icon}>
                                     <RiFontSize/>
                               </span>
                             <span className={styles.zoom_icon}>
                                    <MdOutlineZoomOutMap/> 
                              </span>
                             <span  className={styles.notification_icon}>
                                  <IoIosNotifications/>
                              </span>
                            </div>

                            <div 
                             onClick={()=>{
                                   setOpenProfile(prev=>!prev)
                             }}
                            className={styles.user_profile_logout}>
                                        <div className="user_name_role">
                                            <h3>Joshua</h3>
                                            <h5>admin</h5>
                                        </div>
                                        <div className={styles.user_avatar_con}>
                                               <img src={avatar} alt="user_avatar" />
                                        </div>
                                        {/*username and user image  */}
                            </div>
                            {
                               openProfile &&
                               <ExitModal   />
                            
                            }
                 </div>
          </header>
  )
}

export default Header
