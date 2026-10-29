import SectionTitle from "./SectionTitle";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { useState, type FormEvent } from "react";

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const labelClass =
    "block mb-2 text-xs uppercase tracking-widest text-[#6f542e]";
  const fieldClass =
    "w-full border border-[#8B6B3D]/40 rounded-md p-3 bg-white/50 focus:outline-2 focus:outline-offset-0 focus:outline-[#8B6B3D]";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const isFilled = ["name", "email", "message"].every(
      (field) => String(data.get(field) ?? "").trim() !== ""
    );

    if (!isFilled) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  };

  return (
    <section id="contact" className="py-16">
      <SectionTitle chapter="VII" title="Contact" />

      <p className="mt-4 max-w-2xl">
        Feel free to reach out for collaboration, discussion, or opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div
          className="
              paper-card
              p-5
              flex flex-col
              items-center
              text-center
              hover:-translate-y-1
              transition-all duration-300
              "
        >
          <MdEmail className="text-3xl mb-3" />

          <p className="text-xs uppercase tracking-widest text-[#6f542e]">
            Email
          </p>

          <a
            href="mailto:daivamahdyatha16@gmail.com"
            className="block mt-2 hover:text-[#8B6B3D]"
          >
            daivamahdyatha16@gmail.com
            <br />
          </a>
        </div>

        <div
          className="
              paper-card
              p-5
              flex flex-col
              items-center
              text-center
              hover:-translate-y-1
              transition-all duration-300   
          "
        >
          <IoLogoGithub className="text-3xl mb-3" />

          <p className="text-xs uppercase tracking-widest text-[#6f542e]">
            GitHub
          </p>

          <a
            href="https://github.com/daivamahdyatha16"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 hover:text-[#8B6B3D]"
          >
            github.com/daivamahdyatha16
          </a>
        </div>

        <div
          className=" 
              paper-card
              p-5
              flex flex-col
              items-center
              text-center
              hover:-translate-y-1
              transition-all duration-300
          "
        >
          <FaLinkedin className="text-3xl mb-3" />

          <p className="text-xs uppercase tracking-widest text-[#6f542e]">
            LinkedIn
          </p>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 hover:text-[#8B6B3D]"
          >
            Daiva Mahdyatha
          </a>
        </div>
      </div>
      <div className="mt-12">
  <h3
    className="text-2xl font-semibold mb-4"
    style={{ fontFamily: "Playfair Display" }}
  >
    Send a Message
  </h3>

  <form
    className="space-y-4 paper-card p-6"
    onSubmit={handleSubmit}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="Your Email"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>
    </div>

    <div>
      <label htmlFor="contact-message" className={labelClass}>
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={5}
        placeholder="Your Message"
        required
        className={fieldClass}
      />
    </div>

    <button
      type="submit"
      className="
        px-6 py-3
        bg-[#8B6B3D]
        text-white
        rounded-md
        hover:bg-[#6f542e]
        transition-all
        duration-300
      "
    >
      Send Message
    </button>

    <p role="status" aria-live="polite" className="text-sm">
      {status === "success" && (
        <span className="text-green-800">
          Thank you! Your message has been sent.
        </span>
      )}
      {status === "error" && (
        <span className="text-red-800">
          Please fill in all fields before sending.
        </span>
      )}
    </p>
  </form>
</div>
    </section>
  );
}

export default Contact;
