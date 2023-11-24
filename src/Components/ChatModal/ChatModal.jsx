import { IoClose } from "react-icons/io5";
// styles
import styles from "./ChatModal.module.css";

const ChatModal = () => {
  return (
      <div className={styles.chat_modal_container}>
                                
    <div className={styles.chat_modal}>
    <div className={styles.active_chat_top}>
              <div className={styles.active_receiver_details}>
                      <img src={""} alt="receiver_avatar" />
              </div>
             <span>
                     <IoClose/>
             </span>
    </div>

</div>      
      </div>        
                     

  )
}

export default ChatModal
