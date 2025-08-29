import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/90 backdrop-blur-sm" : "bg-transparent"
      } border-b border-border`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary font-semibold">
            <span className="terminal-prompt font-mono">kishan.dev</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-mono text-sm">
            <button
              onClick={() => handleNavClick("#about")}
              className="text-muted-foreground hover:text-primary transition-colors terminal-prompt"
              data-testid="nav-about"
            >
              about
            </button>
            <button
              onClick={() => handleNavClick("#experience")}
              className="text-muted-foreground hover:text-primary transition-colors terminal-prompt"
              data-testid="nav-experience"
            >
              experience
            </button>
            <button
              onClick={() => handleNavClick("#projects")}
              className="text-muted-foreground hover:text-primary transition-colors terminal-prompt"
              data-testid="nav-projects"
            >
              projects
            </button>
            <button
              onClick={() => handleNavClick("#skills")}
              className="text-muted-foreground hover:text-primary transition-colors terminal-prompt"
              data-testid="nav-skills"
            >
              skills
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary"
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4 font-mono text-sm">
              <button
                onClick={() => handleNavClick("#about")}
                className="text-muted-foreground hover:text-primary transition-colors terminal-prompt text-left"
                data-testid="mobile-nav-about"
              >
                about
              </button>
              <button
                onClick={() => handleNavClick("#experience")}
                className="text-muted-foreground hover:text-primary transition-colors terminal-prompt text-left"
                data-testid="mobile-nav-experience"
              >
                experience
              </button>
              <button
                onClick={() => handleNavClick("#projects")}
                className="text-muted-foreground hover:text-primary transition-colors terminal-prompt text-left"
                data-testid="mobile-nav-projects"
              >
                projects
              </button>
              <button
                onClick={() => handleNavClick("#skills")}
                className="text-muted-foreground hover:text-primary transition-colors terminal-prompt text-left"
                data-testid="mobile-nav-skills"
              >
                skills
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
