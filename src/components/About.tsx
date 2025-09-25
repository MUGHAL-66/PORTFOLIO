import { Download, Star, Award, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function About() {
  const stats = [
    { icon: Star, label: "Years Experience", value: "2+" },
    { icon: Award, label: "Projects Completed", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "5+" },
  ];

  return (
    <section id="about" className="mobile-padding-md">
      <div className="max-w-4xl mx-auto mobile-container">
        <div className="text-center mobile-spacing-lg">
          <div className="luxury-fade-in">
            <h2 className="mobile-text-3xl luxury-text-gradient">
              About Me
            </h2>
          </div>

          <Card className="bg-card border-white/10 p-6 sm:p-8 md:p-12 backdrop-blur-sm luxury-glow luxury-shimmer">
            <div className="mobile-spacing-lg">
              <div className="mobile-spacing-sm">
                <p className="mobile-text-base text-white/80 leading-relaxed">
                  Full-Stack Developer | Shopify Expert | AI
                  Engineer — I specialize in building modern,
                  scalable web applications, high-performing
                  Shopify stores, and intelligent AI-powered
                  solutions. My approach blends clean,
                  user-focused design with robust functionality,
                  ensuring every project not only looks
                  beautiful but also delivers measurable
                  business impact. Driven by innovation, I aim
                  to craft digital experiences that stand out
                  and truly make a difference.
                </p>
              </div>

              {/* Stats */}
              <div className="grid mobile-grid-3 gap-4 md:gap-6 py-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center mobile-spacing-sm luxury-scale-in"
                      style={{
                        animationDelay: `${index * 200}ms`,
                      }}
                    >
                      <div className="flex justify-center">
                        <div className="p-2 md:p-3 bg-primary/20 rounded-full">
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                      </div>
                      <div className="mobile-text-xl luxury-text-gradient">
                        {stat.value}
                      </div>
                      <div className="text-white/60 mobile-text-sm">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Download CV Button */}
              <div className="pt-4 md:pt-6 border-t border-white/10">
                <Button
                  className="bg-primary hover:bg-primary/90 text-black mobile-button rounded-lg transition-all duration-300 transform hover:scale-105 luxury-pulse-glow mobile-text-sm"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Download CV
                </Button>
                <p className="text-white/50 mobile-text-sm mt-3">
                  Get a detailed overview of my experience and
                  skills
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}