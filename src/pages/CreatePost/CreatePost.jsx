import { useNavigate, useSearchParams } from "react-router-dom";

import MainSection from "../../Components/MainSection/MainSection";
import MessageModal from "../../Components/MessageModal/MessageModal";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";
import StylesBar from "./stylesBar";
import styles from "./CreatePost.module.css";
import { Toaster } from "react-hot-toast";
import PreviewModal from "./PreviewModal/PreviewModal";

//icons
import { FaImage } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

// ========= context ======
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCreate } from "../../Hooks/useCreatePost";
import ImagesModal from "../../Components/ImagesModal/ImagesModal";
import LabelsSideBar from "../../Components/LablesSideBar/LabelsSideBar";

//========== custom hooks ========

import { useTrackHighlightedEl } from "../../Hooks/useTrackHighlightedEl";
import { useCollection } from "../../Hooks/useCollection";
import { FaChevronDown, FaEye } from "react-icons/fa6";
import { useDismissModal } from "../../Hooks/useDismiss";

// import toast from "react-hot-toast";

const CreatePost = () => {
  const { highlightedElements, setNewStyle } = useTrackHighlightedEl();

  const [postTitle, setPostTitle] = useState("");
  const { user } = useAuthContext();
  const editorRef = useRef(null);
  const [setPostContent] = useState(null);
  const [openLabelModal, setOpenLabelModal] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState();

  const { posts, fetchData } = useCollection("posts", [""], true);

  const [openMessageModal, setOpenMessageModal] = useState(false);
  const handleCloseMessagesModal = () => {
    setOpenMessageModal(false);
  };
  useDismissModal(openMessageModal, handleCloseMessagesModal);

  const {
    createPost,
    success,
    setSuccess,
    isLoading,

    updatePost,
  } = useCreate("posts");

  const [openImagesModal, setOpenImagesModal] = useState(false);
  const navigate = useNavigate();

  const [queryParameters] = useSearchParams();
  let postId = queryParameters.get("id");

  const handleUpdate = (id) => {
    let postcontent =
      editorRef.current.getEditor().container.children[0].innerHTML;
    updatePost(id, { content: postcontent, postTitle: postTitle });
  };

  const handleOpenImagesModal = () => {
    setOpenImagesModal(true);
  };

  const handleCloseImagesModal = () => {
    setOpenImagesModal(false);
  };

  const handleOpenLabelsModal = () => {
    setOpenLabelModal((prev) => !prev);
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
      status: "Published",
    };
    await createPost(doc);
    navigate("/");
  };

  useEffect(() => {
    let timeout = null;
    if (success) {
      timeout = setTimeout(() => {
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
              <div
                style={{
                  flexBasis: "60%",
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div className={styles.preview_btn_container}>
                  <button type="button">
                    <span>
                      <FaEye />
                    </span>
                    Preview
                  </button>
                  <span onClick={() => setOpenPreviewModal((prev) => !prev)}>
                    <FaChevronDown />
                  </span>
                  {openPreviewModal && (
                    <PreviewModal
                      editorRef={editorRef}
                      post={{
                        authorName: user.email.split()[0],
                        author_id: user.uid,

                        postTitle: postTitle,
                      }}
                    />
                  )}
                </div>
                {postId ? (
                  <button
                    onClick={() => handleUpdate(postId)}
                    disabled={isLoading ? true : false}
                    type="button"
                  >
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
                <span
                  onClick={handleOpenLabelsModal}
                  style={{
                    fontSize: "2rem",
                    paddingLeft: "2rem",
                    cursor: "pointer",
                  }}
                >
                  {openLabelModal ? (
                    <FaArrowAltCircleRight />
                  ) : (
                    <FaArrowCircleLeft />
                  )}
                </span>
              </div>
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
                  style={{ display: "none" }}
                  type="file"
                  id="file_selector"
                  multiple
                />
              </div>
            </StylesBar>
          </div>
        </form>
        {openLabelModal && <LabelsSideBar />}
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
