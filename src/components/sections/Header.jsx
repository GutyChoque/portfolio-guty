import { useState, useEffect } from "react";
import Nav from "./Nav";
function Header() {
  const [isSticky, setSticky] = useState(false);

  const checkScrollTop = () => {
    setSticky(window.scrollY > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <header className="left-0 right-0 z-50 grid grid-cols-3 items-center p-6">
        <h2
          className={`${
            isSticky ? "hidden" : ""
          } ml-4 text-2xl text- font-bold col-start-1`}
        >
          Algun Texto?
        </h2>
        <Nav />
        <div className="col-start-3 col-span-1"></div>
      </header>
      <header
        className={`${
          isSticky
            ? "fixed top-0 transition-opacity duration-700 opacity-100 backdrop-blur-sm"
            : "opacity-0"
        } left-0 right-0 z-50 grid grid-cols-3 items-center p-6`}
      >
        <Nav />
        <div className="col-start-3 col-span-1"></div>
      </header>
    </>
  );
}

export default Header;
