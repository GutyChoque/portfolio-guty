import { useState, useEffect } from "react";
import Nav from "./Nav";
import gutyFace from "../../assets/images/guty-face.jpeg";
import Close from "../../assets/icons/hamburger.svg?react"; // Import the Close icon
import Menu from "../../assets/icons/hamburger.svg?react"; // Import the Menu icon

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // Add this state variable

  const checkScrollTop = () => {
    setHasScrolled(window.scrollY > 30);
    setSticky(window.scrollY * 2 > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) {
      return;
    }

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
    };

    menuToggle.addEventListener("click", handleMenuToggle);

    return () => {
      menuToggle.removeEventListener("click", handleMenuToggle);
    };
  }, [isMenuOpen]); // Add this effect

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
      <Nav isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} /> {/* Pass the state variables as props */}
      <button
        id="menu-toggle"
        className="flex flex-grow text-white basis-0 justify-end text-2xl md:hidden z-50"
      >
        <span id="menu-icon">{isMenuOpen ? <Close /> : <Menu />}</span> {/* Add this button */}
      </button>
    </header>
  );
}

export default Header;