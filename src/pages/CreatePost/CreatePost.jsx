import styles from "./CreatePost.module.css"


import MainSection from "../../Components/MainSection/MainSection"

//icons 
import { FaImage } from "react-icons/fa";
import { useRef } from "react";





const CreatePost = () => {
    
const post = useRef();
const handleSubmit = (e)=>{
    console.log(post.current.innerHTML)
    e.preventDefault();
}

  return (
      <MainSection>

            <div className={styles.post_form_container}>
            <form encType="multipart/form-data"  onSubmit={handleSubmit}>
                        <div className={styles.title_bar_wrapper}>
                        <div className={styles.wrapper}>
            <div className={styles.title_field_con}>
                   <input type="text" id=""  placeholder="title"/>
            </div>
              <div className={styles.file_selector_con}>
                    <label htmlFor="file_selector"  className="text-center">
                              <FaImage/>
                    </label>
                     <input style={{display:"none"}} type="file" id="file_selector"/>
              </div>

            <button type="submit">
                   Publish Post
            </button>
            </div>
                        </div>
          
               <div className={styles.textarea_con}>
                
               <div  ref={post} contentEditable={true} className={styles.textbox}
                 
                >

                 </div>
               </div>
            </form>
            </div>

    {/* </div> */}
      </MainSection>
  )
}

export default CreatePost
