import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "services", "work", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-slide-in ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto mobile-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
              className="luxury-text-gradient tracking-wider navbar-logo-glow flex items-center gap-2 mobile-text-base md:text-xl font-semibold"
            >
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              <span className="hidden sm:inline">USMAN HASSAN</span>
              <span className="sm:hidden">UH</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`navbar-link px-3 lg:px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative min-h-11 min-w-11 flex items-center ${
                      isActive 
                        ? "text-primary" 
                        : "text-white/90 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    )}
                  </a>
                );
              })}
              
              {/* CTA Button */}
              <div className="ml-4 lg:ml-6">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 luxury-glow backdrop-blur-sm min-h-11 min-w-11 flex items-center"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 min-h-11 min-w-11 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="transition-transform duration-300 rotate-180" />
              ) : (
                <Menu size={20} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-black/98 backdrop-blur-xl rounded-2xl mt-4 border border-primary/20 shadow-2xl shadow-primary/10">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`navbar-mobile-item block px-4 py-3 text-base font-medium transition-all duration-300 min-h-11 ${
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-white/90 hover:text-primary"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </a>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-6 py-3 rounded-xl text-center font-medium transition-all duration-300 luxury-glow min-h-11"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}