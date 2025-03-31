import CreatePostForm from "../components/CreatePostForm";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const navigator = useNavigate()
  return (
    <div>
      <h1>Create Post Page</h1>
      <CreatePostForm />
      <button onClick={()=>navigator("/")}>Back to Home</button>
    </div>
  );
}

export default CreatePostPage;
