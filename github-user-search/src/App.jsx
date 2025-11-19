import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* App Header */}
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
        GitHub User Search App
      </h1>

      {/* Search Component */}
      <Search />
    </div>
  );
}

export default App;

