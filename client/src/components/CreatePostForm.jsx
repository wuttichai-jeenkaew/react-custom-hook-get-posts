import { useState } from "react";
import axios from "axios";

function CreatePostForm() {
const[title,setTitle]=useState("")
const[content,setContent]=useState("")

const handleSubmit = async (event) => {
  event.preventDefault();
  
  const newPost = {
  title,
  content,
  };

  try {
    const response = await axios.post("http://localhost:4000/posts", newPost);
    console.log("Product created:", response.data);
  } catch (error) {
    console.error("Error creating product", error);
  }
};


  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Content
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Enter content here"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreatePostForm;
