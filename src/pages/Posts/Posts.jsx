import styles from "./Posts.module.css";

//icons 
import { IoMdAdd } from "react-icons/io";

// other  component

import MainSection from "../../Components/MainSection/MainSection";
import PostsList from "../../Components/PostsList/PostsList";

// ====== custom hooks =========

import { useCollection } from "../../Hooks/useCollection";

const Posts = () => {

  //const {isLoading, error, posts} = useCollection()



  return (
          <MainSection>
                <div className={styles.posts_wrapper}>
                      <div className={styles.search_field_wrapper}>
                               <form >
                               <input type="search"  id="post_search_field"   placeholder="Search post"/>
                                <span  className={styles.create_post_btn_mobile}>
                                          <IoMdAdd/>
                                </span>
                               </form>
                      </div>  

                   <section className={styles.posts_wrapper}>
                            <PostsList/>
                   </section>


                </div>
          </MainSection>
  )
}

export default Posts
