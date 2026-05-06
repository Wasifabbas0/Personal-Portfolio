import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const socialLinks = [
    {icon : FaGithub, href: "https://github.com/Wasifabbas0", label : "GitHub"},
    {icon : FaLinkedin, href: "https://www.linkedin.com/in/wasif-abbas08/", label : "LinkedIn"},
  ]  
  
  const footerLinks = [
    {href: "#about" , label : "About"},
    {href: "#project" , label : "Project"},
    {href: "#experience", label : "Experience"},
    {href: "#contact", label : "Contact"}
  ]

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {/* logo & copyrights */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center justify-center">
              <img src="/logo.png" alt="not found" 
              className="w-40 h-25 object-cover"
              />
            </a>
            <p className="text-sm text-muted-foreground ">
              © {currentYear} Wasif Abbas. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                target="_blank" 
                href={social.href} 
                key={social.href} 
                aria-label={social.label} 
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5"/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
  

}

export default Footer