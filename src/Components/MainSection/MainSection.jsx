import styles from "./MainSection.module.css";


//components
import Header from "../Header/Header";


// ============== custom hooks ========

import { useSettinsContext } from "../../Hooks/useSettingsContext";

const MainSection = ({ children, needNotHeader }) => {
  const { dispatch, sidebarIsOpen } = useSettinsContext();
  return (
    <main
      className={sidebarIsOpen ? styles.main_section : `${styles.main_section}  
      ${styles.main_section_full}`}
      id="main_container"
    >

      {
        !needNotHeader &&
        < Header />
      }
      {children}
    </main>
  )
}

export default MainSection
