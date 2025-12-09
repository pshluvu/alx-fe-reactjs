import { Outlet, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";       // ✅ Import nested components
import ProfileSettings from "./ProfileSettings";     // ✅ Import nested components

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      {/* ✅ Links to nested routes */}
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* ✅ Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default Profile;
