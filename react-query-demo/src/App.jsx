import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// ✅ Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // ✅ Wrap your app in QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

