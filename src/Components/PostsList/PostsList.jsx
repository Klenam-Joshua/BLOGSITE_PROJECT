import { useNavigate } from "react-router-dom";


import styles from "./PostsList.module.css";



// images
import postImage from "../../assets/images/postImage.jpg";
import avatar from "../../assets/images/avatar.png"



// ============== icons ==========
import { FaMessage } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";



const PostsList = ({posts}) => {
  const navigate = useNavigate()

       const handleClick = (url)=>{
                    navigate(`create-post${url}`)
       }



  return (
       posts.map((post)=>(
        <div
       onClick={
            ()=>  handleClick(`?id=${post.id}`)
       }
          className={styles.post}>
        <div className={styles.blog_details}>
               <div className={styles.imageWrapper}>
                     {post.postImageUrl ?  <img src={post.postImageUrl} alt="post_image" />
                     :
                     <p  className={styles.postIcon}>
                         { post.postTitle && post.postTitle[0].toUpperCase()}
                     </p>
              }
               </div>
               <div className={styles.blog_title_date}>
                       <h2>
                         {post.postTitle}
                            {/* {blog.title} */}
                       </h2>
                       <p>
                           Published . {new Date(post.createdAt.seconds  * 1000).toDateString()}
                           {/* Published . {post.timestamp} */}
                       </p>
               </div>
        </div>


        {/* second section */}
        <div className={styles.author_details}>
                      <div className={styles.author_profile}>
                             <h2>{post.authorName}</h2>
                              <div className={styles.author_image}>
                              {post.authorImage ?  
                                 <    img src={post.authorImage} alt="author image" />
                              :
                              <    img src={avatar} alt="author image" />
                            
                            }
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
       ))
  )
}

export default PostsList
