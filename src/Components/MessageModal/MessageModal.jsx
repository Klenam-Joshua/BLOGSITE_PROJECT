

import styles from "./MessageModal.module.css";

function MessageModal({icon, message, title_message}) {
  return (
    <div  className={styles.message_modal_con}>
             <div>
                  {icon}
             </div>
             <h1>{title_message}</h1>
            <h2>{message}</h2>
    </div>
  )
}

export default MessageModal
