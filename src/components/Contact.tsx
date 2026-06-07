import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="py-12">
      <p className="uppercase tracking-[0.3em] text-sm">Chapter VI</p>

      <h2
        className="text-4xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Contact
      </h2>

      <p className="mt-4 max-w-2xl">
        Feel free to reach out for collaboration, discussion, or opportunities.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div
          className="
              border border-[#8B6B3D]
              p-5
              rounded-md
              flex flex-col
              items-center
              text-center
              hover:-translate-y-1
              hover:shadow-lg
              transition-all duration-300
              "
        >
          <MdEmail className="text-3xl mb-3" />

          <p className="text-xs uppercase tracking-widest text-[#8B6B3D]">
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
              border border-[#8B6B3D]
              p-5
              rounded-md
              flex flex-col
              items-center
              text-center
              hover:-translate-y-1
              hover:shadow-lg
              transition-all duration-300   
          "
        >
          <IoLogoGithub className="text-3xl mb-3" />

          <p className="text-xs uppercase tracking-widest text-[#8B6B3D]">
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
              border border-[#8B6B3D]
              p-5
              rounded-md
              flex flex-col
              items-center
              text-center
              hover:-translate-y-1
              hover:shadow-lg
              transition-all duration-300
          "
        >
          <FaLinkedin className="text-3xl mb-3" />

          <p className="text-xs uppercase tracking-widest text-[#8B6B3D]">
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
    </section>
  );
}

export default Contact;
