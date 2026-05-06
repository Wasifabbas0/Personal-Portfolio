import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const About = () => {

  const highlights = [
    {
      icon : Code2,
      title : "Clean Code",
      description : "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon : Rocket,
      title : "Performance",
      description : "Optimizing for speed and delivering lightening-fast user experiences.",
    },
    {
      icon : Users,
      title : "Collaboration",
      description : "Working closely with teams to bring ideas to life."
    },
    {
      icon : Lightbulb,
      title : "Innovation",
      description : "Staying ahead with the latest technologies and best practices."
    }
  ]
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern,
              <span className="font-serif italic font-normal text-white">
                {" "}
                responsive web interfaces with smooth user experiences
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>I’m a passionate frontend developer focused on creating clean, responsive, and interactive user interfaces. I enjoy turning ideas into real-world web applications using modern technologies.</p>

              <p>I have experience working with HTML, CSS, JavaScript, and TypeScript, and I build dynamic applications using React. I also use Tailwind CSS and Bootstrap to create responsive designs efficiently, and I’m familiar with tools like Supabase for backend integration, Redux Toolkit for state management, and ShadCN UI for building modern UI components.</p>

              <p>I’m continuously learning and improving my skills, with a strong interest in building user-friendly and visually appealing web experiences.</p>
            </div>

            <div className="glass rounded-2xl glow-border p-6">
              <p className="text-lg font-medium italic text-foreground">"My goal is to create modern, responsive web applications that provide smooth and engaging user experiences. I focus on writing clean code and building interfaces that are both visually appealing and easy to use."</p>
            </div>
          </div>  
          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item,idx) => (
              <div key={idx} className="glass rounded-2xl p-6 animate-fade-in"
                style={{animationDelay : `${(idx + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About