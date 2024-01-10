import { useState, useEffect } from "react";
import Nav from "./Nav";
import gutyFace from "../../assets/images/guty-face.jpeg";
function Header() {
  const [isSticky, setSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const checkScrollTop = () => {
    setHasScrolled(window.scrollY > 30);
    setSticky(window.scrollY * 2 > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "top-0 transition-transform duration-700 transform translate-y-0"
          : hasScrolled
          ? "transform -translate-y-full"
          : ""
      } fixed left-0 right-0 z-50 grid md:grid md:grid-cols-3 items-center p-6`}
    >
      <div
        className={`${
          isSticky ? "hidden" : "lg:flex"
        } hidden items-center col-start-1`}
      >
        <img src={gutyFace} alt="Guty" className="rounded-round w-16" />
        <h2 className="pl-4 text-2xl text- font-bold">Algun Texto?</h2>
      </div>
      <Nav />
    </header>
  );
}

export default Header;