import styles from "./formsWrapper.module.css";

const formsWrapper = ({children}) => {
  return (
    <div  className={styles.forms_wrapper}>
          {children}
    </div>
  )
}

export default formsWrapper
