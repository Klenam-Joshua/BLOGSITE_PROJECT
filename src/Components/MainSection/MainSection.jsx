import styles from "./MainSection.module.css";


//components
import Header from "../Header/Header";


// ============== custom hooks ========

import { useSettinsContext } from "../../Hooks/useSettingsContext";

const MainSection = ({children}) => {
  const {dispatch, sidebarIsOpen} = useSettinsContext();
  return (
       <main 
        onClick={(e)=>console.log(e.target)}
       className={sidebarIsOpen ? styles.main_section :  `${styles.main_section}  ${styles.main_section_full}`}  id="main_container">
      
             <Header  />
             {children}
       </main>
  )
}

export default MainSection
