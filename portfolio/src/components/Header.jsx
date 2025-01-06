import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navopen, setNavopen] = useState(true);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="mohan kumar"
            />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavopen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {navopen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navopen={navopen} />
        </div>
        <a
          href="#Contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact me
        </a>
      </div>
    </header>
  );
};

export default Header;
