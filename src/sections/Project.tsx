import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { ArrowUpRight } from "lucide-react";
import { GrGithub } from "react-icons/gr";

const Project = () => {
  const projects = [
    {
      title: "Medicine Recommendation System with integrated health guidance",
      description:
        "A machine learning-based system that predicts diseases from user symptoms and provides detailed medical guidance including description, medication, precautions, diet, and workout recommendations.",
      image: "/project/mrc.png",
      tags: [
        "React",
        "Typescript",
        "tailwindcss",
        "ShadcnUi",
        "Flask",
        "Scikit-learn",
      ],
      link: "https://medicine-recommendation-system-eta.vercel.app/",
      github: "https://github.com/Wasifabbas0/Medicine-Recommendation-System",
    },
    {
      title: "Pizza Restaurant Website",
      description:
        "A responsive pizza restaurant website with a clean UI that showcases products and provides an interactive user experience across all devices.",
      image: "/project/pizza.png",
      tags: ["HTML","CSS","Javascript","Responsive design"],
      link: "https://pizzaku.netlify.app/",
      github: "https://github.com/Wasifabbas0/pizza-website",
    },
    {
      title: "Simon Says Game",
      description:
        "“An interactive Simon Says memory game built with JavaScript that challenges users to remember and repeat color sequences with increasing difficulty.",
      image: "/project/simon.png",
      tags: ["HTML","CSS","Javascript"],
      link: "https://simonsaysflashgame.netlify.app/",
      github: "#",
    },
    {
      title: "cynthia ugwu clone",
      description:
        "A front-end clone of the Cynthia Ugwu portfolio website built using HTML, CSS, and JavaScript, focusing on layout design, smooth animations.",
      image: "/project/cynthia.png",
      tags: ["HTML","CSS","Javascript"],
      link: "https://cynthiapractice.netlify.app/",
      github: "#",
    },
  ];
  return (
    <section id="project" className="py-20 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-dealy-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* projects-grid */}
        <div className="grid md:grid-col-2 gap-8">
          {projects.map((project,idx) => (
            <div key={idx} 
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay : `${(idx + 1) * 100}ms`}}
            >

              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image}
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                <div
                className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* overlay link */}
                <div className="absolute inset-0 flex gap-3 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <GrGithub className="w-5 h-5"/>
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag,tagidx) => (
                    <span key={tagidx} className="px-4 py-1.5 rounded-full bg-surface border border-border/50 text-xs font-medium text-primary-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>
        </div>

      </div>
    </section>    
  )
}

export default Project