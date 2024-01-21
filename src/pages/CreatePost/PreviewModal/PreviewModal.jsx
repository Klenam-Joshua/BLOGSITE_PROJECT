import { FaEye, FaFolder } from "react-icons/fa6";
import styles from "./PreviewModal.module.css";
import { useCreate } from "../../../Hooks/useCreatePost";

// eslint-disable-next-line react/prop-types
function PreviewModal({ post, editorRef }) {
  const { createPost } = useCreate("posts");
  const handleCreatePost = async () => {
    let postcontent =
      // eslint-disable-next-line react/prop-types
      editorRef.current.getEditor().container.children[0].innerHTML;
    console.log(post);
    let editedPost = { ...post, status: "draft", content: postcontent };
    await createPost(editedPost);
  };
  return (
    <div className={styles.preview_modal_container}>
      <ul>
        <li>
          {" "}
          <span>
            <FaEye />
          </span>
          <span>Preview Post</span>
        </li>
        <li role="button" onClick={handleCreatePost}>
          {" "}
          <span>
            <FaFolder />
          </span>
          <span>Save</span>
        </li>
      </ul>
    </div>
  );
}

export default PreviewModal;
