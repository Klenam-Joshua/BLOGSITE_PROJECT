import { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDelete } from "../../Hooks/useDelete";

const Dialog = ({ open, postId, handleClose }) => {

    const { deleteDoc, deletingData, deleteError, deleteSuccess, } = useDelete("posts");


    const handleDelete = (id) => {
        console.log(id, " the id here")
        deleteDoc(id)
        handleClose()

    }









    const dialogBox = useRef();



    useEffect(() => {
        if (open) {
            dialogBox.current.showModal();
        }
        else {
            dialogBox.current.close();
        }

    }, [open]);

    return (
        <dialog ref={dialogBox} className={styles.dialogBox}>
            <div>

                <span>
                    <RiDeleteBin6Line />
                </span>
                <p> Are you sure you want to delete this post ?</p>
                <div className={styles.confirmation_btn_con}>
                    <button

                        onClick={() => { handleClose(); }}>
                        Cancel
                    </button>

                    <button
                        onClick={() => handleDelete(postId)}
                    >
                        Delete post
                    </button>
                </div>
            </div>
        </dialog>

    );
};

export default Dialog;