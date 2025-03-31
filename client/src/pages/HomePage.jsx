import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useBlogPosts from "../components/useBlogPosts";

function HomePage() {
  const { posts, isError, isLoading, setPosts, getPosts } = useBlogPosts();
  const navigate = useNavigate();

  const deleteButton = async (key) => {
    try {
      const respon = await axios.delete(`http://localhost:4000/posts/${key}`);
      console.log(`${key}Deleted`);
      getPosts();
      const newPosts = respon.filter((post) => {
        setPosts(newPosts);
        return post.id !== key;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button onClick={() => navigate(`post/create`)}>Create Post</button>
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
                  onClick={() => navigate(`/post/edit/${post.id}`)}
                >
                  Edit post
                </button>
              </div>

              <button
                className="delete-button"
                onClick={() => {
                  deleteButton(post.id);
                }}
              >
                x
              </button>
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
