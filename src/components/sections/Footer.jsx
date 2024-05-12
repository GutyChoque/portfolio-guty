import Carrousel from "../animations/carrousel/Carrousel";
import ReactIcon from "../../assets/icons/reactColor.svg";
import HTMLIcon from "../../assets/icons/htmlColor.svg";
import JavaScriptIcon from "../../assets/icons/jsColor.svg";
import PythonIcon from "../../assets/icons/pythonColor.svg";
import NodeJsIcon from "../../assets/icons/nodeColor.svg";
import DJangoIcon from "../../assets/icons/djangoColor.svg";
import CSSIcon from "../../assets/icons/cssColor.svg";
function Footer() {
  const techIcons = {
    React: <img key="ReactIcon" src={ReactIcon} alt="React" className="react-icon h-10" />,
    CSS: <img key="CSSIcon" src={CSSIcon} alt="CSS" className="css-icon h-10" />,
    HTML: <img key="HTMLIcon" src={HTMLIcon} alt="HTML" className="html-icon h-10" />,
    Python: <img key="PythonIcon" src={PythonIcon} alt="Python" className="python-icon h-10" />,
    JavaScript: (
      <img
      key="JavaScriptIcon"
        src={JavaScriptIcon}
        alt="Javascript"
        className="javascript-icon h-10"
      />
    ),
    NodeJs: <img key="NodeJsIcon" src={NodeJsIcon} alt="NodeJs" className="nodejs-icon h-10" />,
    DJango: <img key="DJangoIcon" src={DJangoIcon} alt="Django" className="django-icon h-10" />,
  };

  return (
    <section id="footer" className="">
      <Carrousel>{Object.values(techIcons)}</Carrousel>
    </section>
  );
}

export default Footer;
