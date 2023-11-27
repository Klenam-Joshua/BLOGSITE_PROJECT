import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/firebase"
import { projectStorage } from "../firebase/firebase"
import { projectFirestore } from "../firebase/firebase"
import { Timestamp } from "../firebase/firebase"

export const useCreate = (collection, method = "GET") => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);


  const ref = projectFirestore.collection(collection, method = "GET");











  const createPost = async (doc, imageUrl) => {





    setIsLoading(true);
    setError(null)
    let createdAt = Timestamp.fromDate(new Date());
    try {
   
      
      let resp = await ref.add({ ...doc, createdAt });
      console.log("added success")
      setIsLoading(false);
      setSuccess(true)



      const imagePath = `/blogImages/${resp.id}/${imageUrl.name}`;
      let img = await projectStorage.ref(imagePath).put(imageUrl);
      const imgUrl = await img.ref.getDownloadURL()
      await ref.doc(resp.id).update({ postImageUrl: imgUrl })

    }





    catch (error) {

      setError(error.message)
      setIsLoading(false)
      setSuccess(false);
      console.log(error, "from error")

    }
  }


  const deleteData = () => {

  }


  useEffect(() => {
    return () => {
      setIsCancelled(true);
      console.log("you have cancelled your request thank you")
    }
  }, [])

  return { createPost, isLoading, error, success, setSuccess }

}


