import React from 'react'



// -------- icons -----
import { FaBook } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { MdModeComment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const Links = [
    {
        name:"Posts",
        icon:<FaBook/>,
        route:"/project"
    },

    {
        name:"Analytics",
        icon:<MdBarChart/>,
        route:"/analytics"

    },
    
    {
        name:"comments",
        icon:<MdModeComment/>,
        route:"/comments"

    },
    {
        name:"settings",
        icon:<IoMdSettings/>,
        route:"/settings"

    },
    
]
const MenuList = () => {
  return (
       Links.map((link,index)=>(
             <li>
                 <a href={link.route}>
                    <span>
                       <link.icon/>
                     </span> 
                    <span>
                    {link.name} 
                    </span>
                </a>
             </li>
       ))
  )
}

export default MenuList
