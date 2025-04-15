import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Skills from './components/Skills'

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Skills/>
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default App
