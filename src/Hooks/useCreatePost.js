import { useEffect, useState } from "react";

import { projectStorage } from "../firebase/firebase";
import { projectFirestore } from "../firebase/firebase";
import { Timestamp } from "../firebase/firebase";
import toast from "react-hot-toast";

export const useCreate = (collection) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = projectFirestore.collection(collection);

  const createPost = async (doc) => {
    setIsLoading(true);
    setError(null);
    let createdAt = Timestamp.fromDate(new Date());
    try {
      await ref.add({ ...doc, createdAt });
      setIsLoading(false);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      setSuccess(false);
    }
  };

  const uploadImages = async (
    index,
    image,
    handleSetUploadedImages,
    handleResetImageProperties
  ) => {
    try {
      let milliseconds = new Date().getTime();
      let imageSubDirectory = Math.random(0, 1) * 10 + milliseconds;

      const imagePath = `/blog_images/${imageSubDirectory}/${image.file.name}`;
      console.log("reached here and loading");
      let uploadTask = await projectStorage.ref(imagePath).put(image.file);

      // console.log(uploadTask.bytesTransferred, "bytes transferred")

      const imgUrl = await uploadTask.ref.getDownloadURL();
      let newImagesUrl = [];
      newImagesUrl.push(imgUrl);
      handleSetUploadedImages(newImagesUrl);

      handleResetImageProperties(index, {
        ...image,
        file: imgUrl,
        uploadingImage: false,
        uploadedImage: true,
      });
    } catch (error) {
      console.log("there was an error uploading the files");
      handleResetImageProperties(index, {
        ...image,
        file: null,
        uploadingImage: false,
        uploadedImage: false,
        error: error.message,
      });
      console.log(error.message);
      // error to be handled professionally
    }
  };

  const handleUploadImage = async (
    postImages,
    handleSetUploadedImages,
    handleResetImageProperties
  ) => {
    console.log("invoked from inside");
    if (postImages.length > 0) {
      try {
        for (let i = 0; i < postImages.length; i++) {
          if (!postImages[i].uploadedImage) {
            handleResetImageProperties(i, {
              ...postImages[i],
              uploadingImage: true,
            });

            await uploadImages(
              i,
              postImages[i],
              handleSetUploadedImages,
              handleResetImageProperties
            );
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const updatePost = async (id, updatedObject) => {
    try {
      await projectFirestore
        .collection(collection)
        .doc(id)
        .update(updatedObject);
      toast.success("post updated successfully");
    } catch (error) {
      toast.error(
        "Oops! there was an error handling your request please try gain"
      );
    }
  };

  useEffect(() => {
    setIsCancelled(false);

    return () => {
      setIsCancelled(true);
    };
  }, []);

  return {
    createPost,
    isLoading,
    error,
    success,
    setSuccess,
    uploadImages,
    handleUploadImage,
    updatePost,
  };
};
