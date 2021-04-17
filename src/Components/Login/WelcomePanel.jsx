import React from "react";
import { Link } from "@reach/router";
import "./Login.css";
import "../Header/Header.css";

const WelcomePanel = ({ username, setUser }) => {
  return (
    <main className="header__welcome">
      <p className="welcome-message">
        Welcome
        <br />
        back
        <br />
        <Link to={`/users/${username}`}> {username}</Link>
      </p>
      <br />
      <button
        className="logout-button"
        onClick={() => {
          setUser("");
        }}
      >
        Logout
      </button>
    </main>
  );
};

export default WelcomePanel;
