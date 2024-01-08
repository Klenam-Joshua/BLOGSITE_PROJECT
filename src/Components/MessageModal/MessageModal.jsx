

import styles from "./MessageModal.module.css";

function MessageModal({ icon, message, title_message }) {
  return (
    <div className={styles.message_modal_con}>
      <div >
        {icon}
      </div>
      <h3>{title_message}</h3>
      <p>{message}</p>
    </div >
  )
}

export default MessageModal
