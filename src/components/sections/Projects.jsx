import React from "react";
import TerminalIcon from "../../assets/icons/terminal.svg";
import ReactIcon from "../../assets/icons/reactColor.svg";
import HTMLIcon from "../../assets/icons/htmlColor.svg";
import JavaScriptIcon from "../../assets/icons/jsColor.svg";
import PythonIcon from "../../assets/icons/pythonColor.svg";
import NodeJsIcon from "../../assets/icons/nodeColor.svg";
import DJangoIcon from "../../assets/icons/djangoColor.svg";
import CSSIcon from "../../assets/icons/cssColor.svg";
import gutyFace from "../../assets/images/guty-face.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Un titulo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur necessitatibus laboriosam fugiat explicabo sequi sunt blanditiis aspernatur expedita. Sint aliquam quisquam ad nostrum. Dolor dolorum numquam repudiandae distinctio officia!",
      technologies: ["React", "CSS", "HTML"],
      img: gutyFace,
      github: "un link a git",
      link: "un link link",
    },
    {
      id: 2,
      title: "Un titulo2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur necessitatibus laboriosam fugiat explicabo sequi sunt blanditiis aspernatur expedita. Sint aliquam quisquam ad nostrum. Dolor dolorum numquam repudiandae distinctio officia!",
      technologies: ["React", "CSS", "HTML"],
      img: gutyFace,
      github: "un link a git2",
      link: "un link link2",
    },
    {
      id: 3,
      title: "Un titulo3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur necessitatibus laboriosam fugiat explicabo sequi sunt blanditiis aspernatur expedita. Sint aliquam quisquam ad nostrum. Dolor dolorum numquam repudiandae distinctio officia!",
      technologies: ["React", "DJango", "CSS", "HTML", "Python"],
      img: gutyFace,
      github: "un link a git3",
      link: "un link link3",
    },
  ];

  const iconsStyle = { width: "30px", height: "30px" };

  const techIcons = {
    React: <img src={ReactIcon} alt="React" className="react-icon h-8" />,
    // CSS: <CSSIcon style={iconsStyle} />,
    // HTML: <HTMLIcon style={iconsStyle} />,
    // Python: <PythonIcon style={iconsStyle} />,
    // JavaScript: <JavaScriptIcon style={iconsStyle} />,
    // NodeJs: <NodeJsIcon style={iconsStyle} />,
    // DJango: <DJangoIcon style={iconsStyle} />,
  };

  return (
    <section
      id="projects"
      className="min-h-dvh flex flex-col justify-center items-center md:p-16 lg:px-28"
    >
      <div className="flex gap-2 md:gap-6 pb-5 md:pb-10 justify-center">
        {/* <TerminalIcon className="" style={{ width: "50px", height: "50px" }} /> */}
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 auto-rows-fr mx-auto">
        {projects.map((project) => (
          <article
            className="flex flex-col justify-between h-full overflow-y-clip rounded-xl w-3/4 md:w-11/12 bg-secondary-black mx-auto"
            key={project.id}
          >
            <img src={project.img} alt={project.title} className="" />

            <div className="px-4 md:px-10 pt-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg text-justify">{project.description}</p>
              <div className="py-6 justify-center flex flex-wrap gap-4">
                {project.technologies.map((technology, index) => (
                  <React.Fragment key={index}>
                    {techIcons[technology]}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="self-center pb-8">
              <a
                href={project.github}
                target="_blank"
                className="px-3"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                className="px-3"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
