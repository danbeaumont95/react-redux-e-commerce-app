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
        <Link to="/" style={{ "text-decoration": "none" }}>
          <h2 className="App__HeaderTitle">
            {username}
            {/* <img className="header__tentIcon" src={tentIcon} alt="" /> */}
          </h2>
        </Link>
      </section>
    </>
  );
};

export default Header;
