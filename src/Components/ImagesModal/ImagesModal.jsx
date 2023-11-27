// ============= images
import { IoClose } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";


// ============= styles

import styles from "./ImagesModal.module.css";


function ImagesModal({handleCloseImagesModal}) {
  return (
    <div className={styles.imagesModal_backdrop}>
            <div className={styles.imagesModal_container}>
                       <div className={styles.images_modal_top_bar}>
                            <p>
                                upload Image
                            </p>
                             
                             <span 
                             onClick={()=>handleCloseImagesModal()}>
                             <IoClose/>  
                             </span>
                           
                       </div>
                       <div className={styles.upload_btn_con}>
                                  <label htmlFor="images_selector"  >
                                  <span>
                                       <IoMdCloudUpload/>
                                 </span>
                                      <span>
                                            choose file
                                      </span>
                                  </label>
                                 
                           
                            <input 
                             style={{display:"none"}}
                            type="file" name="images_selector" id="images_selector" multiple />
                            <span>
                                    
                            </span> 
                       </div>
            </div>
    </div>
  )
}

export default ImagesModal
