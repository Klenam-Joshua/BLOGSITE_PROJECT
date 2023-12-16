import { useState } from "react";
import { projectFirestore } from "../firebase/firebase"


export function useDelete(collection) {

    const [deletingData, setDeletingData] = useState(false);
    const [deleteError, setDeleteError] = useState("");
    const [deleteSuccess, setDeleteSuccess] = useState(false);


    const deleteDoc = async (id) => {
               setDeletingData(true)
        try {
            let response = await projectFirestore.collection(collection).doc(id).delete()
            console.log(response)
          
            if (!response) {

            }

            setDeleteSuccess("post deleted successfully");

        } catch (error) {
            setDeleteError(error.message)
            setDeleteSuccess(false)
            setDeletingData(false)
        }
    }



    return { deleteDoc, deletingData, deleteError, deleteSuccess }
}
