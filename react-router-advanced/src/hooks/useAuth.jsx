import { useState } from "react";

// Simulate authentication status
export function useAuth() {
  // Change isLoggedIn to true to simulate a logged-in user
  const [user] = useState({ isLoggedIn: true }); 
  return user;
}
