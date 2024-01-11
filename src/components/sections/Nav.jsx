import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Nav({ isMenuOpen, setMenuOpen }) { // Add these props
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeSection, setActiveSection] = useState(""); // Add this state variable

  const links = ["home", "skills", "projects", "contact"];

  const handleLinkClick = (linkHash) => { // Add this function
    setMenuOpen(false);
    setActiveSection(linkHash);

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    }
  };

  return (
    <nav className="col-start-1 md:col-start-2 col-span-1 rounded-full backdrop-blur-sm py-3">
      <ul className="flex justify-center gap-2 md:gap-9">
        {links.map((link) => (
          <li key={link}>
            <ScrollLink
              to={link}
              smooth={true}
              duration={700}
              className={`${
                hoveredLink && hoveredLink !== link ? `text-gray-500` : ``
              } text-md md:text-lg font-semibold duration-700 p-2`}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => handleLinkClick(link)} // Add this event handler
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <ul
        id="mobile-menu"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center text-center text-2xl fixed top-0 left-0 right-0 h-screen place-content-center`} // Add this mobile menu
      >
        {links.map((link) => (
          <li key={link}>
            <ScrollLink
              to={link}
              smooth={true}
              duration={700}
              className={`my-4 px-4 py-1 rounded-full ${
                link === activeSection ? "bg-white/20" : ""
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;