import styles from "./MainSection.module.css";


//components
import Header from "../Header/Header";

const MainSection = ({children}) => {
  return (
       <main  className={styles.main_section}>
             <Header/>
             {children}
       </main>
  )
}

export default MainSection
