import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-700 dark:text-white" /> },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-5xl">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
