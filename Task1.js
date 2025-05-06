// TASK1......................................
import React, { useState } from "react";
import UserCard from "./UserCard";
function App() {
  const [showProfile, setShowProfile] = useState(true);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={toggleProfile}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>
      {showProfile && (
        <UserCard
          name="Jane Doe"
          age={28}
          location="New York City"
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
        />
      )}
    </div>
  );
}
export default App;