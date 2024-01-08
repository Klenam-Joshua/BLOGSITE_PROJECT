// ============= images
import { IoClose } from "react-icons/io5";
import { IoMdCloudUpload } from "react-icons/io";

import ImagesList from "./ImagesList";

// ============= styles
import styles from "./ImagesModal.module.css";
import { useState, useEffect, useRef } from "react";

import DOMPurify from "dompurify";

// =============== custom hooks ============
import { useCreate } from "../../Hooks/useCreatePost";
import { validateFiles } from "../../utils/validateImage";

function ImagesModal({ editorRef, handleCloseImagesModal, setPostContent }) {
  const { createPost, handleUploadImage } = useCreate("posts");
  const [files, setFiles] = useState({});
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [received, setReceived] = useState([]);

  const _imagesRef = useRef(images);
  const filesRef = useRef(files);

  const handleChange = (files) => {
    setSelectedImages([]);
    let fileFormats = ["image/jpeg", "image/png"];
    let filteredFiles = validateFiles(files, fileFormats, 3000000);
    if (filteredFiles) setImages(filteredFiles);
  };

  const handleSelect = (id, image) => {
    console.log(selectedImages);
    if (!image.isSelected) {
      setSelectedImages((prevSel) => [...prevSel, image.file]);
    } else {
      let seletdImageIndex = -1;
      let filteredImages = selectedImages.map((selectedImage, index) => {
        if (selectedImage == image.file) {
          seletdImageIndex = index;
          return selectedImage;
        }
        return selectedImage;
      });

      if (seletdImageIndex > -1) {
        filteredImages.splice(seletdImageIndex, 1);
      }

      console.log(filteredImages, seletdImageIndex, "secad");
      setSelectedImages(filteredImages);
    }
    images.map((_image, _index) => {});

    setImages((prevImages) => {
      return prevImages.map((image, index) => {
        //  console.log(image.isSelected)
        return index === id
          ? { ...image, isSelected: !image.isSelected }
          : image;
      });
    });
  };

  const insertSelectedImages = () => {
    handleCloseImagesModal();
    let ele = "";
    setPostContent;
    selectedImages.forEach((element) => {
      ele += `<img loading='lazy'  draggable style='width:40rem; height:20rem' src=${element} /> <br/>`;
    });

    let editorEl = editorRef.current.getEditor().container.children[0];
    editorRef.current.getEditor().container.children[0].innerHTML =
      DOMPurify.sanitize(editorEl.innerHTML + ele);

    console.log(editorRef.current.getEditor().getText());
    setPostContent((prev) => prev + ele);
  };

  const handleSetUploadedImages = (data) => {
    setUploadedImages(data);
  };

  const handleResetImagesProperties = (id, updatedObject) => {
    setReceived((prevReceived) => [...prevReceived, updatedObject]);

    if (images.length > 0) {
      setImages((prevImages) => {
        return prevImages.map((image, index) =>
          index === id ? updatedObject : image
        );
      });
    }
  };

  useEffect(() => {
    if (images.length > 0)
      handleUploadImage(
        images,
        handleSetUploadedImages,
        handleResetImagesProperties
      );
  }, [images.length]);

  return (
    <div className={styles.imagesModal_backdrop}>
      <div className={styles.imagesModal_container}>
        <div className={styles.images_modal_top_bar}>
          <p>upload Image</p>

          <span onClick={() => handleCloseImagesModal()}>
            <IoClose />
          </span>
        </div>
        <div className={styles.imagesDisplayModal}>
          <ImagesList images={images} handleSelect={handleSelect} />
        </div>

        <div className={styles.upload_btn_con}>
          <label htmlFor="images_selector">
            <span>
              <IoMdCloudUpload />
            </span>
            <span>choose file</span>
          </label>

          <input
            style={{ display: "none" }}
            onChange={(e) => handleChange(e.target.files)}
            accept="image/*"
            type="file"
            name="images_selector"
            id="images_selector"
            multiple
          />
          <span></span>
        </div>

        <div className={styles.select_btn_con}>
          <button
            onClick={() => insertSelectedImages()}
            disabled={selectedImages.length > 0 ? false : true}
            className={styles.select_btn}
            style={{ width: "fit-content" }}
          >
            select
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagesModal;
