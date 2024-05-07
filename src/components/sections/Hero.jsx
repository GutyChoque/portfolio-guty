import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import CopyIcon from "../../assets/icons/copy-icon.svg";

function Hero() {
  return (
    <header
      id="hero"
      className="min-h-dvh flex items-center bg-secondary-black"
    >
      <div className="relative text-center py-10 w-full flex flex-col justify-center items-center gap-4">
        <span className="top-line absolute inset-y-0 left-0 w-2/6 bg-white h-1"></span>
        <h1 className="text-4xl md:text-8xl font-bold">Software Developer</h1>

        <h2 className="text-2xl md:text-5xl font-medium">
          Full Stack - React and Express
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 lg:pt-4">
          <span
            href=""
            className="email flex justify-center items-center gap-2 rounded-xl bg-primary-black p-2 border-4 text-lg font-semibold"
          >
            gustavochoque0791@gmail.com
            <button
              onClick={() => {
                const emailSpan = document.querySelector(".email");
                const emailText = emailSpan.textContent.trim();
                navigator.clipboard.writeText(emailText);
              }}
              className="bg-secondary-black border-2 rounded-lg p-1"
              title="hola"
            >
              <img src={CopyIcon} alt="CopyIcon" className="h-8" />
            </button>
          </span>
          <div className="flex gap-20">
            <a href="" className="linkedin w-fit">
              <img src={Linkedin} alt="Linkedin" className="h-10" />
            </a>
            <a href="" className="github w-fit">
              <img src={Github} alt="Github" className="h-10" />
            </a>
          </div>
        </div>
        <span className="bottom-line absolute bottom-0 right-0 w-2/6 bg-white h-1"></span>
      </div>
    </header>
  );
}

export default Hero;
