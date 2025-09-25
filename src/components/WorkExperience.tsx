import { useState, useEffect, useRef } from 'react';
import { Building, Calendar, MapPin, Star, Trophy, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react';
import { Card } from './ui/card';

const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Developed full-stack web applications with role-based dashboards. Worked on frontends with Angular/React and backends with Node.js/Express. Integrated AI/ML for recommendations and built REST APIs.",
    achievements: ["Delivered portfolio sites, dashboards & apps", "Implemented AI-powered features", "End-to-end full-stack solutions"],
    technologies: ["React", "Angular", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Remote Shopify Developer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Built and delivered complete Shopify stores for clients across multiple niches. Customized themes, integrated payment gateways, and optimized SEO. Ensured fast, responsive user experience.",
    achievements: ["10+ Shopify stores delivered", "100% client satisfaction", "Conversion-focused design"],
    technologies: ["Shopify", "Liquid", "API Integration"]
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Created social media graphics, product mockups, and logos. Enhanced branding for clients through visual content. Delivered designs on tight deadlines. Focused on clean modern aesthetics.",
    achievements: [
      "20+ design projects delivered",
      "Increased engagement with visuals",
      "Brand identity creation"
    ],
    technologies: ["Canva", "Figma", "Photoshop", "Illustrator"]
  },
  
  {
    id: 4,
    title: "Shopify Developer (Internship)",
    company: "AU Softs",
    duration: "July 2025",
    location: "Gujrat | Onsite",
    type: "Internship",
    status: "Completed",
    description: "Assisted in Shopify store setup and theme customization. Worked on product uploads, Liquid edits, and store optimization. Implemented SEO best practices to improve store visibility.",
    achievements: ["Delivered 2+ client projects", "Improved store performance", "Hands-on Shopify Liquid"],
    technologies: ["Shopify", "Liquid", "JavaScript"]
  },
  {
    id: 5,
    title: "Social Media Manager",
    company: "Business Breeds",
    duration: "2023 - 2025",
    location: "Lahore | Remote",
    type: "Full-time",
    status: "Completed",
    description: "Managed and scaled multiple social media platforms. Designed engaging posts and ad campaigns to grow brand presence. Analyzed insights to improve reach and engagement.",
    achievements: ["Increased engagement by 50%+", "Consistent brand growth", "Multi-platform management"],
    technologies: ["Canva", "Meta Ads", "Analytics Tools"]
  },
  {
    id: 6,
    title: "Meta Ads Specialist",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Planned and managed Meta (Facebook/Instagram) ad campaigns for multiple Shopify stores in the UK and Pakistan. Created targeted strategies to boost conversions and sales.",
    achievements: [
      "Scaled ROAS across multiple stores",
      "Optimized campaigns for better CTR",
      "Managed budgets for UK & PK markets"
    ],
    technologies: ["Meta Ads", "Facebook/Instagram Ads", "Shopify"]
  }
  
];

export function WorkExperience() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              if (!prev.includes(cardIndex)) {
                return [...prev, cardIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="mobile-padding-lg relative overflow-hidden" ref={sectionRef}>
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto mobile-container relative z-10">
        <div className="text-center mobile-spacing-lg">
          {/* Section Header */}
          <div className="mobile-spacing-sm luxury-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 md:w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
              <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <div className="w-6 md:w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="mobile-text-3xl luxury-text-gradient mb-4">
              Professional Journey
            </h2>
            <p className="text-white/60 mobile-text-base max-w-2xl mx-auto">
              A curated collection of my professional experiences and achievements in the world of technology
            </p>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid mobile-grid-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                data-index={index}
                className={`group relative transition-all duration-700 transform ${
                  visibleCards.includes(index)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with Luxury Design */}
                <Card className="relative h-full bg-gradient-to-br from-card via-card/90 to-card/70 border border-white/10 hover:border-primary/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Luxury Border Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] top-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] bottom-0 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 delay-200"></div>
                  </div>

                  <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 md:mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${
                            job.status === 'Current' ? 'bg-green-400' : 
                            job.status === 'Upcoming' ? 'bg-blue-400' : 'bg-primary'
                          }`}></div>
                          <span className={`text-xs px-2 py-1 rounded-full border ${
                            job.status === 'Current' 
                              ? 'text-green-400 border-green-400/30 bg-green-400/10' 
                              : job.status === 'Upcoming'
                              ? 'text-blue-400 border-blue-400/30 bg-blue-400/10'
                              : 'text-primary border-primary/30 bg-primary/10'
                          }`}>
                            {job.status}
                          </span>
                        </div>
                        <h3 className="mobile-text-base md:text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {job.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-white/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>

                    {/* Company Info */}
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                        <Building className="h-3 w-3 md:h-4 md:w-4 mr-2 md:mr-3 text-primary" />
                        <span className="font-medium mobile-text-sm">{job.company}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm text-white/60">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                          {job.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-4 md:mb-6 flex-grow mobile-text-sm">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                        <span className="text-xs md:text-sm font-medium text-white/80">Key Achievements</span>
                      </div>
                      <div className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2">
                            <Star className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary fill-current" />
                            <span className="text-xs md:text-sm text-white/60">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                        <span className="text-xs md:text-sm font-medium text-white/80">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 md:px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300 min-h-11"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-200"></div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="flex items-center justify-center mt-12 md:mt-16 luxury-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-8 md:w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}