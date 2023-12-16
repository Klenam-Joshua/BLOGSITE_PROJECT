import styles from "./CreatePost.module.css"


import MainSection from "../../Components/MainSection/MainSection"
import MessageModal from "../../Components/MessageModal/MessageModal";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";

import DOMPurify from "dompurify";

//icons 
import { FaImage } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


// ========= context ======
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCreate } from "../../Hooks/useCreatePost";
import ImagesModal from "../../Components/ImagesModal/ImagesModal";





const CreatePost = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const { user } = useAuthContext();
  const post = useRef();
  const [postContent, setPostContent] = useState(null);
  const { createPost, success,setSuccess, isLoading, handleUploadImage } = useCreate("posts")
  
  const [openImagesModal, setOpenImagesModal] = useState(false);


  const handleOpenImagesModal = ()=>{
         setOpenImagesModal(true);
         //console.log("hello")
  }

  const handleCloseImagesModal = ()=>{
       setOpenImagesModal(false)
  }

  const handleSubmit = (e) => {

    e.preventDefault();
   // setPostContent(post.current.innerHTML)
    

    const doc = {
      authorName: user.email.split()[0],
      author_id: user.uid,
      content: postContent,
      postTitle: postTitle

    }
  
   // createPost(doc, imageUrl)


  }

  useEffect(()=>{
    let timeout = null;
       if(success){
      const timeout =  setTimeout(()=>{
                setSuccess(false)
        }, 3000)
       }


       return ()=>{if(timeout) clearTimeout(timeout)}
  },[success])


  return (
    <MainSection>

      <div

        className={styles.post_form_container}>

        <form encType="multipart/form-data" onSubmit={handleSubmit}>

          <div className={styles.title_bar_wrapper}>
            {
              success
              &&

              <p style={{ color: "green", textAlign: "center", fontSize: "1.4rem" }}>
                        post created successful
              </p>
            }
            <div className={styles.wrapper}>

              {/*checks if submit is successful  */}


              <div className={styles.title_field_con}>
                <input
                  onChange={e => setPostTitle(e.target.value)}
                  type="text" id="postTitle" placeholder="title"  required />
              </div>
              <div className={styles.file_selector_con}>
                <span 
                onClick={handleOpenImagesModal}
                className="text-center">
                  <FaImage />
                </span>
                {/* <input
                  onChange={e => setImageUrl(e.target.files[0])}
                  style={{ display: "none" }} type="file" id="file_selector" multiple /> */}
              </div>

              <button type="submit">
                Publish Post
              </button>
            </div>
          </div>

          <div className={styles.textarea_con}>

            <div ref={post} 

              onInput={(e)=>setPostContent(e.currentTarget.innerHTML)}

              contentEditable={true}  
               dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(postContent)}}
              suppressContentEditableWarning={true}

              className={styles.textbox}

            >

              {
                imageUrl && <img
                  draggable="true"
                  src={URL.createObjectURL(imageUrl)} alt="blogImageUrl" />
              }

            </div>
          </div>
        </form>
      </div>

  {
    isLoading &&
    <MessageModal  message={"post created successfully"} title_message={"creating post ..."} icon={<LoadingAnim/>}/>

  }
   {
    success  
    &&
    <MessageModal  message={"post created successfully"} title_message={"SUCCESS"} icon={<IoIosCheckmarkCircleOutline/>}/>

   }

      {

        openImagesModal  &&
        <ImagesModal setPostContent ={setPostContent}  handleCloseImagesModal={handleCloseImagesModal}/>
      }
    </MainSection>
  )
}

export default CreatePost
