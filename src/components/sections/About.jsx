import ReactLogo from "../../assets/icons/react.svg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col"
    >
      <div className="flex gap-2 md:gap-6 pb-5 md:pb-10 justify-center">
        {/* cambiar icono por el de projects */}
        <img src={ReactLogo} alt="About" className="about h-14" /> 
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">
          About Me
        </h2>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center md:px-10"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 auto-rows-fr">
        <article className="p-6 md:p-12 border-2 rounded-2xl sm:text-center w-3/4 md:w-11/12 mx-auto">
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
        <article className="p-6 md:p-12 border-2 rounded-2xl w-3/4 md:w-11/12 mx-auto">
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
        <article className="p-6 md:p-12 border-2 rounded-2xl w-3/4 md:w-11/12 mx-auto">
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

export default About;
