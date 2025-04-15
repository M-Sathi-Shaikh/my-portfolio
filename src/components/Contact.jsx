import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Contact Me
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Have a question, project idea, or just want to say hi? I'm always open to new opportunities and collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:shaikhsathi41@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            📧 Email
          </a>

          <a
            href="https://wa.me/923141605658" // Replace with your number (92300... for Pakistan)
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="tel:+923141605658" // Replace with your actual phone number
            className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            <FaPhone /> Call Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-4 space-x-6 text-xl">
          <a href="https://github.com/M-Sathi-Shaikh" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-sathi-shaikh-b495322a7/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/shaikh.sathi.33" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
