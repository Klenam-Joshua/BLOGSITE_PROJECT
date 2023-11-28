// ============= images
import { IoClose } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";


// ============= styles

import styles from "./ImagesModal.module.css";
import { useState, useEffect } from "react";


function ImagesModal({ handleCloseImagesModal }) {

      const [postImages, setPostImages] = useState(null);


      const handleChange = (files) => {
            setPostImages(files)

      }


      useEffect(() => {
            console.log(postImages)
      }, [postImages])


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
