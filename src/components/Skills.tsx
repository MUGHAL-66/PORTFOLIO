import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Server, Database, Briefcase, ShoppingCart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const skillCards = [
  {
    id: 1,
    icon: Code,
    title: "Frontend & UI/UX",
    skills: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Adobe XD"]
  },
  {
    id: 2,
    icon: Server,
    title: "Backend & AI",
    skills: ["Node.js", "Python", "FastAPI", "OpenAI", "TensorFlow", "Docker", "AWS", "GraphQL"]
  },
  {
    id: 3,
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Firebase", "Prisma", "SQL", "NoSQL"]
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Business Skills",
    skills: ["SaaS Development", "SEO Optimization", "Stripe Integration", "Analytics", "Project Management", "Agile"]
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "Shopify Development",
    skills: ["Liquid", "Shopify Plus", "App Development", "Theme Development", "API Integration", "Performance Optimization"]
  }
];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getCardsToShow = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const cardsToShow = getCardsToShow();

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (isMobile) {
        return (prev + 1) % skillCards.length;
      } else {
        const maxIndex = skillCards.length - cardsToShow;
        return prev >= maxIndex ? 0 : prev + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (isMobile) {
        return prev === 0 ? skillCards.length - 1 : prev - 1;
      } else {
        const maxIndex = skillCards.length - cardsToShow;
        return prev <= 0 ? maxIndex : prev - 1;
      }
    });
  };

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl luxury-text-gradient">
            Skills & Expertise
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Previous Button - Hidden on mobile, positioned better on tablet/desktop */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className={`${
                  isMobile ? 'hidden' : 'flex'
                } border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 absolute left-0 md:-left-4 lg:-left-12 z-10`}
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </Button>

              {/* Cards Container */}
              <div className="w-full max-w-6xl mx-auto">
                {isMobile ? (
                  /* Mobile: Show one card at a time */
                  <div className="px-4">
                    <Card className="bg-card border-white/10 p-4 transition-all duration-300 transform hover:scale-105">
                      <div className="text-center space-y-3">
                        <div className="flex justify-center">
                          <div className="p-2 bg-primary/20 rounded-full">
                            {React.createElement(skillCards[currentIndex].icon, { 
                              className: "h-6 w-6 text-primary" 
                            })}
                          </div>
                        </div>
                        
                        <h3 className="text-lg text-white">
                          {skillCards[currentIndex].title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {skillCards[currentIndex].skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                ) : (
                  /* Tablet/Desktop: Show multiple cards */
                  <div className="overflow-hidden">
                    <div 
                      className={`flex transition-transform duration-500 ease-in-out ${
                        isTablet ? 'gap-4' : 'gap-6'
                      }`}
                      style={{
                        transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                      }}
                    >
                      {skillCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                          <Card
                            key={card.id}
                            className={`bg-card border-white/10 flex-shrink-0 transition-all duration-300 transform hover:scale-105 ${
                              isTablet 
                                ? 'w-[calc(50%-0.5rem)] p-5' 
                                : 'w-[calc(33.333%-1rem)] p-6'
                            } ${
                              Math.floor(index / cardsToShow) === Math.floor(currentIndex / cardsToShow) && (index % cardsToShow) === 1 
                                ? 'scale-105 border-primary/30' 
                                : 'scale-100'
                            }`}
                          >
                            <div className="text-center space-y-4">
                              <div className="flex justify-center">
                                <div className="p-3 bg-primary/20 rounded-full">
                                  <IconComponent className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                                </div>
                              </div>
                              
                              <h3 className="text-xl text-white">
                                {card.title}
                              </h3>
                              
                              <div className="flex flex-wrap gap-2 justify-center">
                                {card.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Next Button - Hidden on mobile, positioned better on tablet/desktop */}
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className={`${
                  isMobile ? 'hidden' : 'flex'
                } border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 absolute right-0 md:-right-4 lg:-right-12 z-10`}
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>

            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <div className="flex justify-center mt-6 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}

            {/* Indicators */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {isMobile ? (
                /* Mobile: Show dot for each card */
                skillCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))
              ) : (
                /* Tablet/Desktop: Show dot for each group */
                Array.from({ length: Math.ceil(skillCards.length / cardsToShow) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * cardsToShow)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / cardsToShow) === index ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}