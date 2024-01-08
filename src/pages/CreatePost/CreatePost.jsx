import { useNavigate, useSearchParams } from "react-router-dom";

import MainSection from "../../Components/MainSection/MainSection";
import MessageModal from "../../Components/MessageModal/MessageModal";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";
import StylesBar from "./stylesBar";
import styles from "./CreatePost.module.css";
import toast, { Toaster } from "react-hot-toast";

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
import { useCollection } from "../../Hooks/useCollection";
import toast from "react-hot-toast";

const CreatePost = () => {
  const { highlightedElements, setNewStyle } = useTrackHighlightedEl();

  const [postTitle, setPostTitle] = useState("");
  const { user } = useAuthContext();
  const editorRef = useRef(null);
  const [postContent, setPostContent] = useState(null);
  const {
    posts,
    fetchData,
    isLoading: loading,
    error,
  } = useCollection("posts", [""], true);

  const { createPost, success, setSuccess, isLoading, handleUploadImage } =
    useCreate("posts");

  const [openImagesModal, setOpenImagesModal] = useState(false);
  const navigate = useNavigate();

  const [queryParameters] = useSearchParams();
  let postId = queryParameters.get("id");

  const handleUpdate = () => {};
  const handleOpenImagesModal = () => {
    setOpenImagesModal(true);
  };

  const handleCloseImagesModal = () => {
    setOpenImagesModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let postcontent =
      editorRef.current.getEditor().container.children[0].innerHTML;

    const doc = {
      authorName: user.email.split()[0],
      author_id: user.uid,
      content: postcontent,
      postTitle: postTitle,
    };
    await createPost(doc);
    navigate("/");
  };

  useEffect(() => {
    let timeout = null;
    if (success) {
      const timeout = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [success]);

  useEffect(() => {
    fetchData(postId);
    if (posts) {
      let editorCon = editorRef.current.getEditor().container.children[0];
      editorCon.innerHTML = posts?.content;
      setPostTitle(posts?.postTitle);
    }
  }, [posts?.authorName]);
  return (
    <MainSection needNotHeader={true}>
      <div className={styles.post_form_container}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.title_bar_wrapper}>
            {success && (
              <p
                style={{
                  color: "green",
                  textAlign: "center",
                  fontSize: "1.4rem",
                }}
              >
                post created successful
              </p>
            )}
            <div
              className={styles.wrapper}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className={styles.title_field_con}>
                <input
                  onChange={(e) => setPostTitle(e.target.value)}
                  type="text"
                  id="postTitle"
                  placeholder="title"
                  value={postTitle}
                  required
                />
              </div>

              {postId ? (
                <button disabled={isLoading ? true : false} type="button">
                  Update
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading ? true : false}
                  type="button"
                >
                  Publish
                </button>
              )}
            </div>
          </div>

          <div className={styles.textarea_con}>
            <StylesBar
              editorRef={editorRef}
              highlightedElements={highlightedElements}
              setNewStyle={setNewStyle}
            >
              <div className={styles.file_selector_con}>
                <span onClick={handleOpenImagesModal} className="text-center">
                  <FaImage />
                </span>
                <input
                  onChange={(e) => setImageUrl(e.target.files[0])}
                  style={{ display: "none" }}
                  type="file"
                  id="file_selector"
                  multiple
                />
              </div>
            </StylesBar>
          </div>
        </form>
      </div>

      {isLoading && (
        <MessageModal
          message={"Creating post..."}
          title_message={"PENDING"}
          icon={<LoadingAnim className={styles.loadingAnim} />}
        />
      )}
      {success && (
        <MessageModal
          message={"Post created successfully"}
          title_message={"SUCCESS"}
          icon={<IoIosCheckmarkCircleOutline />}
        />
      )}

      {openImagesModal && (
        <ImagesModal
          editorRef={editorRef}
          setPostContent={setPostContent}
          handleCloseImagesModal={handleCloseImagesModal}
        />
      )}
      <Toaster />
    </MainSection>
  );
};

export default CreatePost;
