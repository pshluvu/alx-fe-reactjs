import { useState } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ fetchUserData function
  const fetchUserData = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUserData(username);
  };

  return (
    <div className="w-full max-w-md">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading state */}
      {loading && <p className="text-yellow-400 mb-2">Loading...</p>}

      {/* Error message */}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      {/* User info */}
      {user && (
        <div className="bg-gray-800 p-4 rounded-md text-white">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="mb-2">{user.location}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;

