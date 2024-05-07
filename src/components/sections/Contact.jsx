function Contact() {
  return (
    <section
      id="contact"
      className="relative justify-center items-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-start gap-2 md:gap-10 auto-rows-fr"
    >
      <span className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl font-bold text-red-500">aca hacer carrouselle con las tecnologias</span>
      <div className="hidden md:flex flex-col items-center justify-center gap-4">
        <h3 className="">Contact Info</h3>
        <p className="">Email: your-email@example.com</p>
        <p className="">Phone: +1 234 567 890</p>
      </div>
      <div className="hidden md:flex flex-col items-center align-bottom justify-center gap-4">
        <h3 className="">Follow Me</h3>
        <div className="flex gap-4">
          <a href="#" className="">
            LinkedIn
          </a>
          <a href="#" className="">
            GitHub
          </a>
          <a href="#" className="">
            Twitter
          </a>
        </div>
      </div>
      <form action="" className="w-3/4 mx-auto">
        <fieldset className="flex flex-col gap-2 md:gap-4">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Escribe tu nombre"
            required
            className="p-2 rounded border bg-secondary-black"
          />
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Escribe tu correo electrónico"
            required
            className="p-2 rounded border bg-secondary-black"
          />
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Escribe tu mensaje"
            required
            className="p-2 rounded border bg-secondary-black"
          />
          <button type="submit" className="p-2 rounded bg-primary-green mt-4">
            Submit
          </button>
        </fieldset>
      </form>
      <div className="md:hidden flex flex-col items-center md:justify-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <h3 className="">Contact Info</h3>
          <p className="">Email: your-email@example.com</p>
          <p className="">Phone: +1 234 567 890</p>
        </div>

        <h3 className="">Follow Me</h3>
        <div className="flex gap-4">
          <a href="#" className="">
            LinkedIn
          </a>
          <a href="#" className="">
            GitHub
          </a>
          <a href="#" className="">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
