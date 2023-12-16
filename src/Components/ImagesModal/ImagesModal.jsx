// ============= images
import { IoClose } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";


// ============= styles

import styles from "./ImagesModal.module.css";
import { useState, useEffect, useRef } from "react";


// =============== custom hooks ============
import { useCreate } from "../../Hooks/useCreatePost";




function ImagesModal({ handleCloseImagesModal , setPostContent}) {

      const {createPost, success,setSuccess, isLoading,uploadImages, handleUploadImage } = useCreate("posts")
      const [postImages, setPostImages] = useState(null);
      const [images, setImages] = useState([]);
      const [updatedImages, setUpdatedImages] = useState(null)
      const [uploadedImages, setUploadedImages] = useState(null)
      



      

      const handleChange = (files) => {
            setPostImages(files)
 
      }




      useEffect(() => {
           let files = [];      
          for (let key in postImages) {
                 if(key !== 'length'  || key !== 'item'){
                  files.push(postImages[key])    
                  console.log(key)  
                 }
               
          }
       
          

              setImages(files)

      }, [postImages])



      useEffect(()=>{
           if(images) handleUploadImage(images,setUploadedImages);
           
         

      },[images])

      useEffect(() => {
            if (uploadedImages !== null) {
                setPostContent((prev) => {
                    let newContent = prev;
                    for (let i = 0; i < uploadedImages.length; i++) {
                        let stringEl = `<img src=${uploadedImages[i]} alt="post_image" />`;
                        newContent += stringEl;
                    }
                    return newContent;
                });
            }
        }, [uploadedImages]);
        


      const displaySelectedImages = () => {

      }


      return (
            <div className={styles.imagesModal_backdrop}>
                  <div className={styles.imagesModal_container}>
                        <div className={styles.images_modal_top_bar}>
                              <p>
                                    upload Image
                              </p>

                              <span
                                    onClick={() => handleCloseImagesModal()}>
                                    <IoClose />
                              </span>

                        </div>
                        <div className={styles.imagesDisplayModal}>
                                  
                     
                        {
                              images &&
                                    
                              images.map((image)=>{
                                    let source = typeof image === 'object' ? URL.createObjectURL(image) : image;
                                  return  <img src={source} alt="post_image" />
                                   })
                        }
                        {

                           updatedImages &&
                                    
                              updatedImages.map((image)=>{
                                         let source = typeof image === 'object' ? URL.createObjectURL(image) : image;
                             return  <img src={source} alt="post_image" />
                    })


                        }
                           </div>

                        <div className={styles.upload_btn_con}>
                              <label htmlFor="images_selector"  >
                                    <span>
                                          <IoMdCloudUpload />
                                    </span>
                                    <span>
                                          choose file
                                    </span>
                              </label>


                              <input
                                    style={{ display: "none" }}
                                    onChange={(e) => handleChange(e.target.files)}

                                    type="file" name="images_selector" id="images_selector" multiple />
                              <span>

                              </span>
                        </div>
                  </div>
            </div>
      )
}

export default ImagesModal
