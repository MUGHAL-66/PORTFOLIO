import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="luxury-text-gradient text-xl tracking-wider mb-2">
              USMAN HASSAN
            </div>
            <p className="text-white/60 text-sm">
              © 2025 Usman Hassan. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-primary transition-colors duration-200"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/40 text-sm flex items-center justify-center gap-2">
              Made with creativity
              <Heart className="h-4 w-4 text-primary fill-current" />
              late nights, and strong coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}