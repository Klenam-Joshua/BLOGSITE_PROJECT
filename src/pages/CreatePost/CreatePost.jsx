import styles from "./CreatePost.module.css"


import MainSection from "../../Components/MainSection/MainSection"

//icons 
import { FaImage } from "react-icons/fa";
import { useRef, useState } from "react";


// ========= context ======
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCreate } from "../../Hooks/useCreatePost";




const CreatePost = () => {
  const [imageUrl, setImageUrl] = useState(null);
 
  const [postTitle, setPostTitle] = useState("");
  const { user } = useAuthContext();
  const post = useRef();
  const [postContent, setPostContent] = useState(null);

  const { createPost, success, isLoading } = useCreate("posts")




  const handleSubmit = (e) => {

    e.preventDefault();
   // setPostContent(post.current.innerHTML)
    

    const doc = {
      authorName: user.email.split()[0],
      author_id: user.uid,
      content: postContent,
      postTitle: postTitle

    }
    console.log(doc)
    createPost(doc, imageUrl)


  }

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
                       <p> post created successful</p>
              </p>
            }
            <div className={styles.wrapper}>

              {/*checks if submit is successful  */}


              <div className={styles.title_field_con}>
                <input
                  onChange={e => setPostTitle(e.target.value)}
                  type="text" id="postTitle" placeholder="title" />
              </div>
              <div className={styles.file_selector_con}>
                <label htmlFor="file_selector" className="text-center">
                  <FaImage />
                </label>
                <input
                  onChange={e => setImageUrl(e.target.files[0])}
                  style={{ display: "none" }} type="file" id="file_selector" />
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

      {/* </div> */}
    </MainSection>
  )
}

export default CreatePost
