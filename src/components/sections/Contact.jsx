import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen min-h-dvh justify-center items-center md:p-16 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:items-start gap-10 md:px-10 auto-rows-fr"
    >
      <form action="">
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Escribe tu nombre"
            required
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Escribe tu nombre"
            required
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Escribe tu nombre"
            required
          />
        </fieldset>
      </form>
      <div>
        <h3>un nombre o mail</h3>
      </div>
      <div>
        <h3>otra cosa</h3>
      </div>
    </section>
  );
}

export default Contact;
