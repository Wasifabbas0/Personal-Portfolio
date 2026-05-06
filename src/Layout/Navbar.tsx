import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navlinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "projects" },
];

const Navbar = () => {
    const [isMobileMenuOpen , setisMobileMenuOpen] = useState(false);
    const [isScroll, setisScroll] = useState(false);

    useEffect(() => {
      const handlescroll = () => {
        setisScroll(window.scrollY > 50);
      };

      window.addEventListener("scroll", handlescroll);
    } ,[])

  return (
    <header className={`fixed left-0 right-0 top-0 transition-all duration-500 ${isScroll ? "glass-strong" : "bg-transparent py-5"} z-50 border-none`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#">
          <img
            src="/logo.png"
            alt="not found"
            className="w-40 h-25 object-cover"
          />
        </a>

        {/*desktop nav */}
        <div className="hidden md:flex gap-1">
          <div className="glass rounded-full px-4 py-1 flex items-center gap-2">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*CTA btn*/}
        <div className="hidden md:block mr-12">
          <Button>Contact me</Button>
        </div>

        {/*mobile menu button*/}
        <button className="md:hidden p-2 text-foreground mr-10" onClick={() => setisMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={28}/> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-5 text-center">
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}

          <Button size="sm">Contact me</Button>
        </div>
      </div>)}
    </header>
  );
};

export default Navbar;
