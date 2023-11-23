import { useEffect, useReducer, useRef } from "react"
import { projectFirestore } from "../firebase/firebase"
import { useAuthContext } from "./useAuthContext"

export const useCollection= (collection,query, orderBy) => {

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [posts, setPosts] = useState(null);

const ref = projectFirestore.collection(collection);

const _query = useRef(query).current;
const   _orderBy = useRef(orderBy).current




  useEffect(()=>{
     setIsLoading(true);
     setError(false);
          if(query){
               ref = ref.where(_query);
          }

          if(orderBy){
                ref = ref.orderBy(_orderBy)
          }
   const unsb = ref.onSnapshot((snapshot)=>{
            let articles = [];
            snapshot.forEach((doc)=>{
               articles.push({...doc.data(), id:doc.id})
            })

            setPosts(articles);
            setIsLoading(false)
   },(error)=>{
           setError(error.message)
   })

    },[])





    
  return  {isLoading,error, posts}
  
}


