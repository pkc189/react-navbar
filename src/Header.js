import React from "react";

export default () => {
  return (
    <>
      <header className="Header">
        <a href="/">Logo</a>
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
      </header>
    </>
  );
};
