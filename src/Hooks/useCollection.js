import { useEffect, useReducer, useState, useRef } from "react"
import { projectFirestore } from "../firebase/firebase"
import { useAuthContext } from "./useAuthContext"
import { projectStorage } from "../firebase/firebase"

export const useCollection = (collection, orderBy ) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [copiedPosts, setCopiedPosts] = useState(null)
  let ref = projectFirestore.collection(collection);
  //let _query = useRef(query).current;
  let _orderBy = useRef(orderBy).current




  useEffect(() => {
    setIsLoading(true);
    setError(false);
    // if (query) {
    //   ref = ref.where(_query);
    // }
 if(_orderBy){
  
 }
    
    const unsb = ref.orderBy("createdAt", "desc").onSnapshot((snapshot) => {
      let articles = [];
      snapshot.forEach((doc) => {
        // projectStorage.
        articles.push({ ...doc.data(), id: doc.id })
      })

      setPosts(articles);
      setCopiedPosts(articles)

      setIsLoading(false)
    }, (error) => {
      setError(error.message)
      console.log(error)
      setIsLoading(false)
    })


    // ===  unsubscribe from request

    return () => unsb()




  }, [])






  return { isLoading, error, posts, setPosts, copiedPosts, setCopiedPosts }

}


