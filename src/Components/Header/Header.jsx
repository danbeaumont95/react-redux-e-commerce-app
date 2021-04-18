import React from "react";
import "./Header.css";
import "../../App.css";
import { Link } from "@reach/router";
import LoginPage from "../Login/LoginPage";
import WelcomePanel from "../Login/WelcomePanel";

const Header = ({ setUser, username }) => {
  return (
    <>
      <section className="App__Header">
        {username ? (
          <WelcomePanel setUser={setUser} username={username} />
        ) : (
          <LoginPage setUser={setUser} username={username} />
        )}
   
      </section>
    </>
  );
};

export default Header;
