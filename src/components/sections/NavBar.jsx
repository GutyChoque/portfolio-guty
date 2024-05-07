import Close from "../../assets/icons/hamburger.svg";
import Menu from "../../assets/icons/hamburger.svg";
import gutyFace from "../../assets/images/guty-face.jpeg";
import CV from "../../assets/files/CV_Gustavo_Choque_-_EN.pdf";
import Arrow from "../animations/Arrow";

const Header = () => {
  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 rounded-3xl flex justify-between py-3 px-10 backdrop-blur-sm bg-secondary-black/5 lg:w-full lg:max-w-[1200px] z-50">
      <div className="flex items-center gap-4">
        <img src={gutyFace} alt="Guty" className="rounded-round h-14" />
        <div className="">
          <p className="text-lg font-semibold">Gustavo Choque</p>
          <a
            href={CV}
            download="CV Gustavo Choque - EN"
            className="relative text-base font-normal"
          >
            Download CV
          <Arrow />
          </a>
        </div>
      </div>
      <nav className="flex items-center">
        <ul className="flex gap-6 text-lg font-semibold">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
