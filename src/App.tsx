import Navbar from "@/Layout/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Experience from "@/sections/Experience"
import Project from "@/sections/Project"
import Contact from "@/sections/Contact"
import Footer from "@/Layout/Footer"

function App() {

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Project />
          <Experience />
          <Contact />  
        </main>
        <Footer />   
      </div>
    </>
  )
}

export default App
