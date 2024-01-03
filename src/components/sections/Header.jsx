import { useState, useEffect } from "react";
import Nav from "./Nav";
function Header() {
  const [isSticky, setSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const checkScrollTop = () => {
    setHasScrolled(window.scrollY > 30);
    setSticky(window.scrollY > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "fixed top-0 transition-transform duration-700 transform translate-y-0 backdrop-blur-sm"
          : hasScrolled
          ? "transform -translate-y-full"
          : ""
      } left-0 right-0 z-50 grid grid-cols-1 md:grid-cols-3 items-center p-6`}
    >
      <h2
        className={`${
          isSticky ? "hidden" : "lg:block"
        } hidden ml-4 text-2xl text- font-bold col-start-1`}
      >
        Algun Texto?
      </h2>
      <Nav />
    </header>
  );
}

export default Header;
