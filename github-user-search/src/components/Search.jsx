import { useState } from "react";
import axios from "axios";

function Search() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ fetchUserData function
  const fetchUserData = async (query) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );

      if (response.data.items.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(response.data.items);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      fetchUserData(username);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex mb-6">
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
      {loading && <p className="text-yellow-400 mb-4">Loading...</p>}

      {/* Error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Users list */}
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


