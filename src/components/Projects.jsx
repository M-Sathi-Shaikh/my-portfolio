import bookOrdering from "../assets/book-ordering.jpeg";
import greenView from "../assets/greenview.jpeg";
import spaceExplorer from "../assets/space-explorer.jpeg";

const projects = [
  {
    title: "Online Book Ordering",
    description: "A responsive web app for browsing and ordering books online. Built with React and Tailwind.",
    image: bookOrdering, // ✅ fixed
    link: "https://online-books-ordering.vercel.app/"
  },
  {
    title: "GreenViewLandscapings",
    description: "A professional website for landscaping and pool installation services.",
    image: greenView, // ✅ fixed
    link: "https://greenviewlandscapings.com"
  },
  {
    title: "Space Explorer",
    description: "Explore daily NASA astronomy photos and data using their public API. Built with React and Tailwind.",
    image: spaceExplorer, // ✅ fixed
    link: "https://your-space-explorer-site.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
