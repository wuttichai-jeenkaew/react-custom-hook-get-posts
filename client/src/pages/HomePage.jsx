import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useBlogPosts from "../components/hooks/useBlogPosts";
import axios from "axios";
function HomePage() {
  const navigate = useNavigate();
 
  const {posts,getPosts,isError,isLoading} = useBlogPosts()

  useEffect(() => {
    getPosts();
  }, []);

  const deletePosts = async () => {
    try {
      const response  = await axios.delete(`http://localhost:4000/posts/${post.id}`)
      alert("deleted");
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button onClick={()=>navigate(`/post/create`)}>Create Post</button>
      </div>
      <div className="board">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
                <button 
                className="edit-button"
                onClick={() => navigate(`/post/edit/${post.view}`)}
                >Edit post</button>
              </div>

              <button className="delete-button" onClick={()=>deletePosts}>x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
