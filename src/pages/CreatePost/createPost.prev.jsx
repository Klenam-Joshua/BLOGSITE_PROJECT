import styles from "./CreatePost.module.css"


import MainSection from "../../Components/MainSection/MainSection"
import MessageModal from "../../Components/MessageModal/MessageModal";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";
import StylesBar from "./stylesBar";

import DOMPurify from "dompurify";

//icons 
import { FaImage } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


// ========= context ======
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCreate } from "../../Hooks/useCreatePost";
import ImagesModal from "../../Components/ImagesModal/ImagesModal";

//========== custom hooks ========

import { useTrackHighlightedEl } from "../../Hooks/useTrackHighlightedEl";



const CreatePost = () => {
    const { highlightedElements, setNewStyle, handleMouseUp } = useTrackHighlightedEl()

    const [postTitle, setPostTitle] = useState("");
    const { user } = useAuthContext();
    const postRef = useRef();
    const [postContent, setPostContent] = useState(null);
    const { createPost, success, setSuccess, isLoading, handleUploadImage } = useCreate("posts")

    const [openImagesModal, setOpenImagesModal] = useState(false);





    const handleInsertSelectedImages = (images) => {
        let currentImages = images.map((imageUrl) => {
            return `<img src=${imageUrl} alt='posturl' />  <br/>`

        })
        postRef.current.innerHTML += DOMPurify.sanitize(currentImages)


    }

    const handleOpenImagesModal = () => {
        setOpenImagesModal(true);

    }

    const handleCloseImagesModal = () => {
        setOpenImagesModal(false)
    }

    const handleSubmit = (e) => {

        e.preventDefault();



        const doc = {
            authorName: user.email.split()[0],
            author_id: user.uid,
            content: postContent,
            postTitle: postTitle

        }

        // createPost(doc, imageUrl)


    }

    useEffect(() => {
        let timeout = null;
        if (success) {
            const timeout = setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }


        return () => { if (timeout) clearTimeout(timeout) }
    }, [success])


    return (
        <MainSection needNotHeader={true}>

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
                                    type="text" id="postTitle" placeholder="title" required />
                            </div>

                            {/* <div className={styles.editor_controls_con}>


                <div className={styles.file_selector_con}>
                  <span
                    onClick={handleOpenImagesModal}
                    className="text-center">
                    <FaImage />
                  </span> 
                 <input
                  onChange={e => setImageUrl(e.target.files[0])}
                  style={{ display: "none" }} type="file" id="file_selector" multiple /> 
                </div>
              </div> */}

                            {/* <button type="submit">
                Publish Post
              </button> */}
                        </div>
                    </div>


                    <div className={styles.textarea_con}>
                        <StylesBar postRef={postRef} highlightedElements={highlightedElements} setNewStyle={setNewStyle} >

                        </StylesBar >

                        {/* <div ref={postRef}
              ///+++++
              onKeyDown={(e) => {
                //console.log("run this code")
                let emptyString = "  "
                if (!e.target.innerHTML) {
                  e.target.innerHTML = e.target.innerHTML + `<h1> x </h1>`
                }
                else {

                }
              }}
              onInput={e => {
                setPostContent(e.currentTarget.innerHTML)

              }}

              contentEditable={true}
              suppressContentEditableWarning={true}
              onMouseUp={
                handleMouseUp
              }

              className={styles.textbox}

            >


            </div> */}
                    </div>

                </form>
            </div>

            {
                isLoading &&
                <MessageModal message={"post created successfully"} title_message={"creating post ..."} icon={<LoadingAnim />} />

            }
            {
                success
                &&
                <MessageModal message={"post created successfully"} title_message={"SUCCESS"} icon={<IoIosCheckmarkCircleOutline />} />

            }

            {

                openImagesModal &&
                <ImagesModal
                    postRef={postRef}

                    setPostContent={setPostContent}
                    handleInsertSelectedImages={handleInsertSelectedImages}
                    handleCloseImagesModal={handleCloseImagesModal} />
            }
        </MainSection>
    )
}

export default CreatePost
