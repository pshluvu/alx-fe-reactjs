import axios from "axios";

// fetchUserData with advanced search options
export const fetchUserData = async (username, location = "", minRepos = 0) => {
  try {
    // Build query string
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${query}`;

    const response = await axios.get(url);
    return response.data.items; // return array of users
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
