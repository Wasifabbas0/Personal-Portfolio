import AnimatedBorderButton from "@/components/AnimatedBorderButton"
import Button from "@/components/Button"
import {ArrowRight, ChevronDown} from "lucide-react"
import { FaGithub,FaLinkedin } from "react-icons/fa"
import type React from "react"
import { Download } from "lucide-react"

type socialIcons = {
  icon : React.ElementType;
  href : string
}

const socialLinks : socialIcons[] = [
  {icon : FaGithub, href: "https://github.com/Wasifabbas0"},
  {icon : FaLinkedin, href: "https://www.linkedin.com/in/wasif-abbas08/"}
]

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "BootStrap",
  "Reactjs",
  "TailwindCSS",
  "ShadcnUi",
  "SupaBase",
  "Git",
  "GitHub",
]

const Hero = () => {
return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="not found" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background "/>
      </div>

      {/* Green dots */}
      <div>
        {[...Array(30)].map((_) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
          style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation : `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay : `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/*content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-15 justify-items-center-safe">
          {/* left column -text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full gap-2 text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software Engineer • Frontend developer    
              </span>
            </div>
            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                Experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200"> 
                Hi, I’m Wasif Abbas. a Frontend Developer passionate about building clean, responsive, and user-friendly web interfaces. I focus on turning ideas into interactive experiences with strong attention to performance and usability.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button>
                  Contact Me <ArrowRight className="w-5 h-5"/> 
                </Button>
              </a>

              <a href="/Wasif cv.pdf" target="_blank" rel="noopener noreferrer">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5"/>
                  Download CV
                </AnimatedBorderButton>
              </a>

            </div>
            {/* social media icons     */}
            <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((item,idx) => (
                <a
                  target="_blank" 
                  key={idx}
                  href={item.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<item.icon/>}
                </a>
              ))}
            </div>
          </div>

          {/* right column */}
          <div className="relative animate-fade-in animation-delay-300">
              {/* profile-img */}
              <div className="relative max-w-md mx-auto">
                <div 
                className="absolute inset-0
                rounded-3xl bg-linear-to-br 
               from-primary/30 via-transparent 
               to-primary/10 blur-2xl animate-pulse"
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img src="/profile.png" alt="not found" className="w-full aspect-4/5 object-cover rounded-2xl"/>
                  {/* floating badge */}
                  <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div  className="w-2 h-2 rounded-full bg-primary"/>
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>
                

          </div>    
        </div>
        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-center text-muted-foreground mb-6">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-10">
              {[...skills, ...skills].map((skill,idx) => (
                <div key={idx} className="shrink-0 py-6">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div  className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800">
         <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero


