import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // ✅ Get dynamic route param

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Showing details for post ID: {id}</p>
    </div>
  );
}

export default BlogPost;
