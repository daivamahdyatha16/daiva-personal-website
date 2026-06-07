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

      <section className="flex flex-row gap-6 mt-6 ">
        <MdEmail className="text-2xl" />
        <p className="border-r border-[#8B6B3D] pr-6">
          Email: daivamahdyatha16@gmail.com
        </p>

        <IoLogoGithub className="text-2xl" />

        <a
          href="https://github.com/daivamahdyatha16/"
          className="border-r border-[#8B6B3D] pr-6"
        >
          GitHub: daivamahdyatha16
        </a>
        <FaLinkedin className="text-2xl" />

        <a
          href="https://www.linkedin.com/"
          className="border-r border-[#8B6B3D] pr-6"
        >
          LinkedIn: Daiva Mahdyatha
        </a>
      </section>

      <p className="mt-6 max-w-2xl">
        Feel free to reach out for collaboration, discussion, or opportunities.
      </p>
    </section>
  );
}

export default Contact;
