import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user data from storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to login
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Sign Out
    </button>
  );
}
