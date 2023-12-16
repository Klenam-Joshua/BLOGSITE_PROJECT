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






  const ref = projectFirestore.collection(collection);


  const createPost = async (doc) => {

    setIsLoading(true);
    setError(null)
    let createdAt = Timestamp.fromDate(new Date());
    try {
      
      let resp = await ref.add({ ...doc, createdAt });
      setIsLoading(false);
      setSuccess(true)
    }





    catch (error) {

      setError(error.message)
      setIsLoading(false)
      setSuccess(false);
      console.log(error, "from error")

    }
  }


  const uploadImages = async (image, setUploadedImages)=>{
  try {
console.log("invoked")

      let milliseconds =   new Date().getTime();
      let imageSubDirectory = (Math.random(0, 1)  * 10) + milliseconds;
  
      const imagePath = `/blog_images/${imageSubDirectory}/${image.name}`;
      // console.log(imagePath, "path")
      let img = await projectStorage.ref(imagePath).put(image);
      const imgUrl = await img.ref.getDownloadURL()
      let newImagesUrl = [];
      newImagesUrl.push(imgUrl);
      setUploadedImages(newImagesUrl)
     //setPostImages(newImagesUrl)
   
      console.log(imgUrl)
    
    
  } catch (error) {
      console.log(error.message)
      // error to be handled professionally
  }

  }

  const handleUploadImage =async (postImages, setUploadedImages) => {      
            if(postImages){
                  try {
                   
                    postImages.map((postImage)=>{
                   
                       uploadImages(postImage, setUploadedImages)
                      // console.log("uploaded the image")
                      // console.log("uploaded images successfully")
                    })
                     
                  } catch (error) {
                      console.log(error.message)
                  }
            }
  }


  useEffect(() => {
     setIsCancelled(false)

    return () => {
      setIsCancelled(true);
    }
  }, [])

  return {createPost, isLoading, error, success, setSuccess, uploadImages,handleUploadImage }

}


