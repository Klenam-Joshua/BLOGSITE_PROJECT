import React from 'react'
import {  NavLink } from 'react-router-dom';


// ------ styles --------

import  styles from "./MenuList.module.css"

// -------- icons -----
import { FaBook } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { MdModeComment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";


const Links = [
    {
        name:"Posts",
        icon:<FaBook/>,
        route:"/"
    },

    {
        name:"Analytics",
        icon:<MdBarChart/>,
        route:"/analytics"

    },
    
    {
        name:"Comments",
        icon:<MdModeComment/>,
        route:"/comments"

    },
    {
        name:"Chats",
        icon:<IoChatbubbles/>,
        route:"/chats"

    },
    {
        name:"Settings",
        icon:<IoMdSettings/>,
        route:"/settings"

    },
    
]
const MenuList = () => {
  return (
       Links.map((link,index)=>(
             <li  key={link.name}  className={styles.navLink__list}>
                 <NavLink   className={({isActive})=>{
                       return isActive ? styles.active_link: ""
                 }} to={link.route}>
                    <span>
                      {link.icon}
                     </span> 
                    <span>
                    {link.name} 
                    </span>
                </NavLink>
             </li>
       ))
  )
}

export default MenuList
