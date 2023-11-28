import { IoClose } from "react-icons/io5";
// styles
import styles from "./ChatModal.module.css";

const ChatModal = ({ class_name, handleCloseChat }) => {


        const handleClose = (e) => {
                console.log(e)
                e.stopPropagation();

                handleCloseChat();

        }
        return (
                <div
                        onClick={(e) => handleClose(e)}
                        className={class_name ? `${styles.chat_modal_container} ${styles.show_chat_modal_container}` : styles.chat_modal_container}>

                        <div className={styles.chat_modal}>
                                <div className={styles.active_chat_top}>
                                        <div className={styles.active_receiver_details}>
                                                <img src={""} alt="receiver_avatar" />
                                        </div>
                                        <span
                                                onClick={(e) => handleClose(e)}
                                                className={styles.cancel}>
                                                <IoClose />
                                        </span>
                                </div>

                        </div>
                </div>


        )
}

export default ChatModal
