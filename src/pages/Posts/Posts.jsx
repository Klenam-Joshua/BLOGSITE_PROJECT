import styles from "./Posts.module.css";

//icons 
import { IoMdAdd } from "react-icons/io";

// other  component

import MainSection from "../../Components/MainSection/MainSection";
import PostsList from "../../Components/PostsList/PostsList";

// ====== custom hooks =========

import { useCollection } from "../../Hooks/useCollection";
import { useEffect, useState } from "react";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";
import Dialog from "../../Components/Dialog/Dialog";

const Posts = () => {

   let { isLoading, error, posts, setPosts, copiedPosts, setCopiedPosts } = useCollection("posts")
   const [keyWord, setKeyWord] = useState("");
   const [open, setOpen] = useState(false);
   const [postId, setPostId] = useState(null)



   const handleClose = () => {
      setOpen(false);
      console.log("hello there where are  doing that")
   }



   const handleOpen = (id) => {
      setOpen(true);
      setPostId(id)
      console.log(open, postId, "iposd and is open here")
   }




   /// = = = =    filters the posts
   useEffect(() => {
      if (posts) {


         let filteredPost = posts.filter((post) => {
            return post.postTitle.trim().toUpperCase().includes(keyWord.trim().toUpperCase())
         })

         setCopiedPosts(filteredPost)

      }
   }, [keyWord])



   return (
      <>

         <MainSection>
            <div className={styles.posts_wrapper}>
               <div className={styles.search_field_wrapper}>

                  <input type="search"
                     onChange={e => setKeyWord(e.target.value)}
                     id="post_search_field" placeholder="Search post" />
                  <span className={styles.create_post_btn_mobile}>
                     <IoMdAdd />
                  </span>

               </div>

               <section className={styles.posts_wrapper}>
                  {
                     posts && posts.length < 1 ?
                        <p>
                           no posts to display
                        </p>
                        :
                        ""
                  }
                  {
                     error &&
                     <p>
                        there was a problem fetching your data
                     </p>

                  }
                  {
                     isLoading &&
                     <div className={styles.loadingAnim_con}>
                        <LoadingAnim dynamic_class="loading-div" />
                     </div>
                  }


                  {posts &&
                     <PostsList posts={copiedPosts} handleOpen={handleOpen} />
                  }
                  {
                     copiedPosts && copiedPosts.length < 1 &&
                     <div className={styles.emptyPost}>
                        no post matches {`  " ${keyWord.substring(0, 60)}... "`}
                     </div>
                  }

               </section>


            </div>
         </MainSection>
         <Dialog open={open} postId={postId} handleClose={handleClose} />
      </>
   )
}

export default Posts
