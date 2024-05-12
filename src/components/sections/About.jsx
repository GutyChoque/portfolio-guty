import TerminalIcon from "../../assets/icons/terminal.svg";

function About() {
  const articles = [
    {
      title: "Front-End Developer",
      paragraph: "Experienced in JavaScript, HTML, CSS and React framework.",
      comment:
        "Knowledge of TailwindCSS, Material UI and most popular technologies.",
    },
    {
      title: "Front-End Developer",
      paragraph: "Experienced in JavaScript, HTML, CSS and React framework.",
      comment:
        "Knowledge of TailwindCSS, Material UI and most popular technologies.",
    },
    {
      title: "Front-End Developer",
      paragraph: "Experienced in JavaScript, HTML, CSS and React framework.",
      comment:
        "Knowledge of TailwindCSS, Material UI and most popular technologies.",
    },
  ];

  const articleStyle =
    "flex flex-col gap-4 p-6 rounded-2xl text-center bg-secondary-black min-h-[50dvh]";
  const titleStyle = "text-lg md:text-xl lg:text-2xl font-medium";
  const textStyle = "text-xs md:text-sm lg:text-xl font-normal";

  return (
    <section id="about" className="flex flex-col gap-8">
      <div className="flex gap-2 md:gap-6 justify-center">
        <img src={TerminalIcon} alt="About" className="about h-14" />
        <h2 className="text-xl md:text-2xl lg:text-5xl font-medium">
          About Me
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-6">
        {articles.map((article, index) => (
          <article className={articleStyle} key={index}>
            <h3 className={titleStyle}>{article.title}</h3>
            <p className={textStyle}>{article.paragraph}</p>
            <p className={textStyle}>{article.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
