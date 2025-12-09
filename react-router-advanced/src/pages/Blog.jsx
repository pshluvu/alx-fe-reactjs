import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Advanced Routing" },
  { id: 3, title: "Protected Routes" },
];

function Blog() {
  return (
    <div>
      <h2>Blog</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
