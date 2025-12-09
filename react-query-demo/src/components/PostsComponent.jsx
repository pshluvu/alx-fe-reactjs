import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    
    // ✅ Advanced options required by ALX
    refetchOnWindowFocus: false,    // do not refetch automatically when window gains focus
    keepPreviousData: true,         // keep old data while fetching new data
    staleTime: 10000,               // optional, keep data fresh for 10 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {data.slice(0, 10).map((post) => (
        <div key={post.id} style={{ marginBottom: "1rem" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;

