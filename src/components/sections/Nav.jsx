import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Nav() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = ["home", "skills", "projects", "contact"];

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