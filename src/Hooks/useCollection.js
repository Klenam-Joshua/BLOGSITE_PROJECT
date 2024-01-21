import { useEffect, useReducer, useState, useRef } from "react";
import { projectFirestore } from "../firebase/firebase";
import { useAuthContext } from "./useAuthContext";
import { projectStorage } from "../firebase/firebase";
import toast from "react-hot-toast";

export const useCollection = (collection, orderBy, fetchSingle) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);
  const [copiedPosts, setCopiedPosts] = useState(null);
  let ref = projectFirestore.collection(collection);

  let _orderBy = useRef(orderBy).current;

  const fetchData = async (id) => {
    setIsLoading(true);
    setError(false);
    if (id) {
      try {
        let data = await projectFirestore.collection(collection).doc(id).get();
        console.log(data.data(), "data");
        setPosts(data.data());
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    let unsb = null;
    if (!fetchSingle) {
      unsb = ref.orderBy("createdAt", "desc").onSnapshot(
        (snapshot) => {
          let articles = [];
          snapshot.forEach((doc) => {
            articles.push({ ...doc.data(), id: doc.id });
          });

          setPosts(articles);

          setIsLoading(false);
        },
        (error) => {
          setError(error.message);

          toast.error("there was an error fetching your post");
          setIsLoading(false);
        }
      );
    }
    return () => {
      if (unsb) unsb();
    };
  }, []);

  return {
    fetchData,
    isLoading,
    error,
    posts,
    setPosts,
    copiedPosts,
    setCopiedPosts,
  };
};
