import { useEffect, useState } from "react";
import axios from "axios";

function useBlogPosts (){
    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
  
    const getPosts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const results = await axios("http://localhost:4000/posts",posts);
        setPosts(results.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
  
   
    
    return {posts,getPosts,isError,isLoading}
}
export default useBlogPosts