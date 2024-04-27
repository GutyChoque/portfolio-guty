import ReactLogo from "../../assets/icons/react.svg";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-dvh flex flex-col justify-center items-center md:p-16 lg:px-28"
    >
      <div className="flex gap-2 md:gap-6 pb-5 md:pb-10 justify-center">
        {/* <ReactLogo className="" style={{ width: "50px", height: "50px" }} /> */}
        <img src={ReactLogo} alt="Skills" className="skills h-14 w-14" />
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">
          My Expertise
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center md:px-10">
        <article className="p-6 md:p-12 border-2 rounded-2xl sm:text-center w-3/4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
            Front-End Developer
          </h3>
          <p className="text-xs md:text-sm lg:text-xl font-normal">
            Experienced in JavaScript, HTML, CSS and React framework.
          </p>
          <p className="text-xs md:text-sm lg:text-xl font-normal">
            Knowledge of TailwindCSS, Material UI and most popular technologies.
          </p>
        </article>
        <article className="p-6 md:p-12 border-2 rounded-2xl w-3/4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
            Front-End Developer
          </h3>
          <p className="text-xs md:text-sm lg:text-xl font-normal">
            Experienced in JavaScript, HTML, CSS and React framework.
          </p>
          <p className="text-xs md:text-sm lg:text-xl font-normal">
            Knowledge of TailwindCSS, Material UI and most popular technologies.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Skills;