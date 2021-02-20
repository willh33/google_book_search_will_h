import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-dark text-white">
      <a className="text-white text-decoration-underline pr-3" href="/">
        Google Books
      </a>
      <a className="text-white text-decoration-underline pr-3" href="/search">
        Search
      </a>
      <a className="text-white text-decoration-underline" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
