import TerminalIcon from "../../assets/icons/terminal.svg?react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Un titulo",
      description: "Una descripcion",
      technologies: "Tecnologia",
      img: "una imagen",
      github: "un link a git",
      link: "un link link"
    },
    {
      id: 2,
      title: "Un titulo2",
      description: "Una descripcion2",
      technologies: "Tecnologia2",
      img: "una imagen2",
      github: "un link a git2",
      link: "un link link2"
    },
  ];

  return (
    <section id="projects" className="min-h-screen min-h-dvh flex flex-col justify-center items-center">
      <div className="flex gap-2 md:gap-6 pb-5 md:pb-10 justify-center">
        <TerminalIcon className="" style={{ width: "50px", height: "50px" }} />
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">My Projects</h2>
      </div>
      <div className="">
        {projects.map((project) => (
          <article className="" key={project.id}>
            <div className="">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
            </div>
            <div className="">
              <a
                href={project.github}
                target="_blank"
                className=""
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.link}
                target="_blank"
                className=""
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
