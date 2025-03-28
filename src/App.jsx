import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"


function App() {
 

  return (
    <div className=" font-sans">
      
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
