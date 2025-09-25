import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl luxury-float"></div>
        <div
          className="absolute bottom-20 right-4 md:right-10 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-3xl luxury-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full luxury-pulse-glow"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full luxury-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto mobile-container z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="mobile-spacing-md text-center lg:text-left">
            <div className="mobile-spacing-sm">
              {/* First line - Greeting with name */}
              <div className="hero-text-reveal">
                <p className="mobile-text-sm text-muted-foreground font-normal">
                  Asslam-o-Alaikum I'm Usman Hassan
                </p>
              </div>

              {/* Second line - Roles */}
              <div
                className="hero-text-reveal"
                style={{ animationDelay: "0.3s" }}
              >
                <h1
                  className="mobile-text-lg md:text-3xl font-bold leading-tight"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffffff, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Full Stack Developer | Shopify Expert | AI
                  Engineer
                </h1>
              </div>

              <div
                className="hero-text-reveal"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="mobile-text-base text-white/70 max-w-lg leading-relaxed mx-auto lg:mx-0">
                  I'm a Full-Stack Developer, Shopify Expert, and AI Engineer with a passion for building scalable, user-friendly, and revenue-driven digital solutions. With expertise in modern frameworks and AI integration, I help businesses transform ideas into impactful products
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 hero-text-reveal justify-center lg:justify-start"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-black mobile-button rounded-lg transition-all duration-300 transform hover:scale-105 luxury-glow mobile-text-base"
                size="lg"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black mobile-button rounded-lg transition-all duration-300 mobile-text-base"
                size="lg"
              >
                <a
                  href="#projects"
                  className="flex items-center"
                >
                  View Projects
                  <Download className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div
            className="relative hero-text-reveal order-first lg:order-last"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative w-full max-w-sm md:max-w-md mx-auto hero-image-float">
              {/* Animated gradient border */}
              <div className="absolute inset-0 hero-gradient-border rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>

              {/* Image */}
              <div className="relative z-10 p-3 md:p-4">
                <ImageWithFallback
                  src="https://mughal-66.github.io/Usman-Portfolio/usman.jpeg"
                  alt="Usman Hassan - Full Stack Developer"
                  className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Enhanced floating elements - mobile optimized */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-primary/20 rounded-full blur-xl luxury-float"></div>
              <div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 bg-white/10 rounded-full blur-lg luxury-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/4 -right-6 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full blur-lg luxury-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/4 -left-6 md:-left-8 w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-full blur-md luxury-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}