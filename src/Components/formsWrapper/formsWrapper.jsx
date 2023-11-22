import styles from "./formsWrapper.module.css";

const FormsWrapper = ({children}) => {
  return (
    <div  className={styles.forms_wrapper}>
          {children}
    </div>
  )
}

export default FormsWrapper
