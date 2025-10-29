import profile from "../assets/profile.jpeg"
const About = () => {
    return (
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            About Me
          </h2>
  
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/*  Image visible on all screen sizes now */}
            <img
              src={profile}
              alt="Profile"
              className="w-52 h-52 object-cover rounded-xl shadow-md"
            />
  
            {/* Bio */}
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a frontend developer with a passion for creating beautiful, responsive websites and web apps.
                I love turning ideas into interactive, functional interfaces that people enjoy using.
              </p>
              <br />
              <p>
                I specialize in React, Tailwind CSS, and modern frontend technologies. My goal is to keep improving,
                learning new tools, and delivering quality code and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  