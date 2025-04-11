import { SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-16 border-t border-gray-800 scroll-mt-24"
    >
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side – message and social icons */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 border-b-4 inline-block border-green-500">
            Contacts
          </h2>
          <p className="mb-6 text-gray-300">
            "If you have any questions, don't hesitate to contact me."
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/brankicakostic/"
              className="transition-none hover:opacity-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} className="text-[#0A66C2]" />
            </a>
            <a
              href="https://github.com/brankicakostic"
              className="transition-none hover:opacity-100"
              aria-label="GitHub"
            >
              <SiGithub color="#ffffff" size={28} />
            </a>
          </div>
        </div>
        {/* Right side – contact info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-green-400 text-xl font-medium">Get in touch</h3>
          <a
            href="mailito:brankica.kostic@gmail.com"
            className="flex items-center gap-4 hover:opacity-100"
          >
            <SiGmail color="#D14836" size={28} />
            <span>brankica.kostic@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
