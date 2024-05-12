import ReactLogo from "../../assets/icons/react.svg";
import gutyFace from "../../assets/images/guty-face.jpeg";

function Projects() {
  const projects = [
    {
      title: "Un titulo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur necessitatibus laboriosam fugiat explicabo sequi sunt blanditiis aspernatur expedita. Sint aliquam quisquam ad nostrum. Dolor dolorum numquam repudiandae distinctio officia!",
      img: gutyFace,
      github: "un link a git",
      link: "un link link",
    },
    {
      title: "Un titulo2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur necessitatibus laboriosam fugiat explicabo sequi sunt blanditiis aspernatur expedita. Sint aliquam quisquam ad nostrum. Dolor dolorum numquam repudiandae distinctio officia!",
      img: gutyFace,
      github: "un link a git2",
      link: "un link link2",
    },
    {
      title: "Un titulo3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur necessitatibus laboriosam fugiat explicabo sequi sunt blanditiis aspernatur expedita. Sint aliquam quisquam ad nostrum. Dolor dolorum numquam repudiandae distinctio officia!",
      img: gutyFace,
      github: "un link a git3",
      link: "un link link3",
    },
  ];

  const imgStyle = {
    maskImage: "linear-gradient(black 80%, transparent)",
  };

  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="flex gap-2 md:gap-6 justify-center">
        <img src={ReactLogo} alt="My Projects" className="projects h-14" />
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-6">
        {projects.map((project, index) => (
          <article
            className="flex flex-col gap-4 rounded-xl overflow-y-hidden bg-secondary-black"
            key={index}
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-80"
              // style={imgStyle}
            />

            <div className="px-4 md:px-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg text-justify">{project.description}</p>
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
