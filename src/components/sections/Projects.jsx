import TerminalIcon from "../../assets/icons/terminal.svg?react";
import ReactIcon from "../../assets/icons/reactColor.svg?react";
import HTMLIcon from "../../assets/icons/htmlColor.svg?react";
import JavaScriptIcon from "../../assets/icons/jsColor.svg?react";
import PythonIcon from "../../assets/icons/pythonColor.svg?react";
import NodeJsIcon from "../../assets/icons/nodeColor.svg?react";
import DJangoIcon from "../../assets/icons/djangoColor.svg?react";
import CSSIcon from "../../assets/icons/cssColor.svg?react";
import gutyFace from "../../assets/images/guty-face.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Un titulo",
      description: "Una descripcion",
      technologies: ["React", "CSS", "HTML"],
      img: gutyFace,
      github: "un link a git",
      link: "un link link",
    },
    {
      id: 2,
      title: "Un titulo2",
      description: "Una descripcion2",
      technologies: ["React", "CSS", "HTML"],
      img: gutyFace,
      github: "un link a git2",
      link: "un link link2",
    },
    {
      id: 3,
      title: "Un titulo3",
      description: "Una descripcion3",
      technologies: ["React", "DJango", "CSS", "HTML", "Python"],
      img: gutyFace,
      github: "un link a git3",
      link: "un link link3",
    },
  ];

  const iconsStyle = { width: "30px", height: "30px" };

  const techIcons = {
    React: <ReactIcon style={iconsStyle} />,
    CSS: <CSSIcon style={iconsStyle} />,
    HTML: <HTMLIcon style={iconsStyle} />,
    Python: <PythonIcon style={iconsStyle} />,
    JavaScript: <JavaScriptIcon style={iconsStyle} />,
    NodeJs: <NodeJsIcon style={iconsStyle} />,
    DJango: <DJangoIcon style={iconsStyle} />,
  };

  return (
    <section
      id="projects"
      className="min-h-screen min-h-dvh flex flex-col justify-center items-center md:p-16 lg:px-28"
    >
      <div className="flex gap-2 md:gap-6 pb-5 md:pb-10 justify-center">
        <TerminalIcon className="" style={{ width: "50px", height: "50px" }} />
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-start gap-10 md:px-10 auto-rows-fr">
        {projects.map((project) => (
          <article
            className="flex flex-col justify-between h-full overflow-y-clip rounded-xl border w-3/4 md:w-full"
            key={project.id}
          >
            <img src={project.img} alt={project.title} />

            <div className="px-10 pt-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              <div className="py-4 md:p-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex items-center border rounded-xl py-2 px-4 gap-2"
                  >
                    {techIcons[technology]}
                    <p className="font-semibold">{technology}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="self-center p-8">
              <a
                href={project.github}
                target="_blank"
                className="p-2"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                className="p-2"
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
