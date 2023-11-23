import styles from "./PostsList.module.css";



// images
import postImage from "../../assets/images/postImage.jpg";
import avatar from "../../assets/images/avatar.png"



// ============== icons ==========
import { FaMessage } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";



const PostsList = ({posts}) => {
  return (
       posts.map((post)=>{
        <div  className={styles.post}>
        <div className={styles.blog_details}>
               <div className={styles.imageWrapper}>
                      <img src={postImage} alt="post_image" />
               </div>
               <div className={styles.blog_title_date}>
                       <h2>
                           Ai revolution
                            {/* {blog.title} */}
                       </h2>
                       <p>
                           Published . Nov 2 2023
                           {/* Published . {post.timestamp} */}
                       </p>
               </div>
        </div>


        {/* second section */}
        <div className={styles.author_details}>
                      <div className={styles.author_profile}>
                             <h2>J K Klenam</h2>
                              <div className={styles.author_image}>
                               <    img src={avatar} alt="author image" />
                              </div>
                      </div>
                      <div className={styles.blog_stats}>
                                <div className={styles.comments_stat}>
                                       <span  className={styles.counts}>
                                            0
                                       </span>
                                       <span>
                                              <FaMessage/>
                                       </span>
                                </div>
                                <div className={styles.view_counts}>
                                        <span  className={styles.counts}>
                                            0
                                       </span>
                                       <span>
                                            <IoMdStats/>
                                       </span>
                                </div>

                      </div>
        </div>
      
        
</div>
       })
  )
}

export default PostsList
