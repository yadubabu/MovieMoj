import React from "react";
// import "./header.scss";
import "./style.css";

const Header = () => {
  return (
    <div className="container">
      <h1>
        <span>Disney&nbsp;</span>Hotstar
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/movies">Movies</a>
            <a href="/series">Series</a>
            <a href="/episodes">Episodes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
