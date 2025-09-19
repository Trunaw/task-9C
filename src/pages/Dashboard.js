import React from "react";
import LogoutButton from "../components/LogoutButton";

function Dashboard() {
  const user = localStorage.getItem("user");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {user}!</h2>
      <p>You are now logged in to Dev@Deakin.</p>
      <LogoutButton />
    </div>
  );
}

export default Dashboard;
