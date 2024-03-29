import { useNavigate } from "react-router-dom";

//======== Dom purify ==============

import styles from "./PostsList.module.css";

// images

import avatar from "../../assets/images/avatar.png";

// ============== icons ==========
import { FaMessage } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

import WebShare from "./RWebShare";

// = = = = = = = = =  other components

const PostsList = ({ posts, handleOpen }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const navigate = useNavigate();

  // = = = = = = = = =  redirects user to an edit page when a post is clicked

  const handleClick = (url) => {
    navigate(`create-post${url}`);
  };

  //= = = =
  //  sets the id of  the post that is hovered
  ///= = = = =
  // const handleMouseEnter = (id) => {
  //   setHoveredElement(id);
  // };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };
  return (
    posts &&
    posts?.map((post, index) => (
      <div
        onMouseEnter={() => setHoveredElement(index)}
        onMouseLeave={handleMouseLeave}
        key={post.id}
        className={styles.post}
      >
        <div
          onClick={() => handleClick(`?id=${post.id}`)}
          className={styles.blog_details}
        >
          <div className={styles.imageWrapper}>
            {post.postImageUrl ? (
              <img src={post.postImageUrl} alt="post_image" loading="lazy" />
            ) : (
              <p className={styles.postIcon}>
                {post.postTitle && post.postTitle[0].toUpperCase()}
              </p>
            )}
          </div>
          <div className={styles.blog_title_date}>
            <h2>
              {post.postTitle.length > 20
                ? post.postTitle.substring(0, 20) + "..."
                : post.postTitle}
              {/* {blog.title} */}
            </h2>
            <p>
              <span>{post.status || "Draft" + " "}</span>
              {new Date(post.createdAt.seconds * 1000).toDateString()}
              {/* Published . {post.timestamp} */}
            </p>
          </div>
        </div>

        {/* second section */}
        <div className={styles.author_details}>
          <div className={styles.author_profile}>
            <h2>{post.authorName}</h2>
            <div className={styles.author_image}>
              {post.authorImage ? (
                <img src={post.authorImage} alt="author image" />
              ) : (
                <img src={avatar} alt="author image" />
              )}
            </div>
          </div>
          <div className={styles.blog_stats}>
            {hoveredElement === index ? (
              <div style={{ display: "flex", gap: "1rem" }}>
                <span
                  onClick={() => handleOpen(post.id)}
                  className={styles.deleteIcon}
                >
                  <MdDelete />
                </span>
                <span style={{ fontWeight: "bold", paddingLeft: "1rem" }}>
                  <WebShare postTitle={"hi"} postUrl="URL" />
                </span>
              </div>
            ) : (
              <>
                <div className={styles.comments_stat}>
                  <span className={styles.counts}>0</span>
                  <span>
                    <FaMessage />
                  </span>
                </div>

                <div className={styles.view_counts}>
                  <span className={styles.counts}>0</span>
                  <span>
                    <IoMdStats />
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    ))
  );
};

export default PostsList;
