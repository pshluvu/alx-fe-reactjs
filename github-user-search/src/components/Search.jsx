import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState(""); // ✅ new
  const [minRepos, setMinRepos] = useState(0);  // optional advanced
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUserData(username, location, minRepos);
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos"
          className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none"
          min={0}
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-yellow-400 mb-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Users */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-4 rounded-md flex flex-col items-center text-white"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-1"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;


