import styles from "./Posts.module.css";

//icons
import { IoMdAdd } from "react-icons/io";

// other  component

import MainSection from "../../Components/MainSection/MainSection";
import PostsList from "../../Components/PostsList/PostsList";

// ====== custom hooks =========

import { useCollection } from "../../Hooks/useCollection";
import { useEffect, useMemo, useState } from "react";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";
import Dialog from "../../Components/Dialog/Dialog";

const Posts = () => {
  let { isLoading, error, posts, setPosts } = useCollection("posts", [
    "createdAt",
    "desc",
  ]);
  const [keyWord, setKeyWord] = useState("");
  const [open, setOpen] = useState(false);
  const [postId, setPostId] = useState(null);
  const [copiedPosts, setCopiedPosts] = useState(null);
  const memoizedPost = useMemo(() => posts, [posts]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    setOpen(true);
    setPostId(id);
  };

  /// = = = =    filters the posts
  useEffect(() => {
    posts && posts.length > 1 ? setCopiedPosts(posts) : ""; ///  setCopiedPosts(articles);
  }, [memoizedPost]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      console.log(posts);
      let filteredPost = posts.filter((post) => {
        return post.postTitle
          .trim()
          .toUpperCase()
          .includes(keyWord.trim().toUpperCase());
      });

      setCopiedPosts(filteredPost);
    }
  }, [keyWord]);

  return (
    <>
      <MainSection>
        <div className={styles.posts_wrapper}>
          <div className={styles.search_field_wrapper}>
            <input
              type="search"
              onChange={(e) => setKeyWord(e.target.value)}
              id="post_search_field"
              placeholder="Search post"
            />
            <span className={styles.create_post_btn_mobile}>
              <IoMdAdd />
            </span>
          </div>

          <section className={styles.posts_wrapper}>
            {posts && !copiedPosts ? (
              <p className={styles.emptyPost}>no posts to display</p>
            ) : (
              ""
            )}
            {error && (
              <p className={styles.error_display_con}>
                there was a problem fetching your data
              </p>
            )}
            {isLoading && (
              <div className={styles.loadingAnim_con}>
                <LoadingAnim className="loading-div" />
              </div>
            )}

            {posts && <PostsList posts={copiedPosts} handleOpen={handleOpen} />}
            {copiedPosts && copiedPosts.length < 1 && (
              <div className={styles.emptyPost}>
                no post matches {`  " ${keyWord.substring(0, 60)}... "`}
              </div>
            )}
          </section>
        </div>
      </MainSection>
      <Dialog open={open} postId={postId} handleClose={handleClose} />
    </>
  );
};

export default Posts;
