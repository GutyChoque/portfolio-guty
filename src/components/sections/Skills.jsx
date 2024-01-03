import ReactLogo from "../../assets/react.svg?react";

function Skills() {
  return (
    <section id="skills" className="min-h-screen min-h-dvh flex flex-col justify-center items-center p-16 px-28">
      <div className="flex gap-6 pb-10 justify-center">
        <ReactLogo className="" style={{ width: "50px", height: "50px" }} />
        <h2 className="text-2xl md:text-5xl font-medium">My Expertise</h2>
      </div>
      <div className="flex gap-10 justify-center px-10">
        <article className="p-12 border-2 rounded-2xl max-w-screen-sm">
          <h3 className="text-xl md:text-2xl font-medium">
            Front-End Developer
          </h3>
          <p className="text-sm md:text-xl font-normal">
            Experienced in JavaScript, HTML, CSS and React framework.
          </p>
          <p className="text-sm md:text-xl font-normal">
            Knowledge of TailwindCSS, Material UI and most popular technologies.
          </p>
        </article>
        <article className="p-12 border-2 rounded-2xl max-w-screen-sm">
          <h3 className="text-xl md:text-2xl font-medium">
            Front-End Developer
          </h3>
          <p className="text-sm md:text-xl font-normal">
            Experienced in JavaScript, HTML, CSS and React framework.
          </p>
          <p className="text-sm md:text-xl font-normal">
            Knowledge of TailwindCSS, Material UI and most popular technologies.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Skills;
