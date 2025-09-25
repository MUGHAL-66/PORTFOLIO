import { Code, Bot, Cloud, Wrench, Palette, Diamond, Megaphone } from 'lucide-react';
import { Card } from './ui/card';

const services = [
 {
    id: 1,
    icon: Code,
    emoji: "💻",
    title: "Web Development",
    description: "Responsive, high-performance websites and web apps built with modern frameworks for businesses that need speed and scalability.",
    features: [
      "Custom sites & dashboards using React/Next.js and Node.js",
      "REST/GraphQL APIs for real-time data exchange",
      "Shopify stores with secure payments and custom sections",
      "SEO-friendly, performance-optimized code"
    ]
  },
  {
    id: 2,
    icon: Bot,
    emoji: "🤖",
    title: "AI & Machine Learning",
    description: "Practical AI solutions that automate tasks, reveal insights, and create smarter user experiences across platforms.",
    features: [
      "Chatbots and workflow automation powered by OpenAI",
      "Recommendation engines for products or careers",
      "Predictive analytics using TensorFlow and Python",
      "Interactive dashboards for data visualization"
    ]
  },
  {
    id: 3,
    icon: Cloud,
    emoji: "☁️",
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and deployments to keep applications reliable, secure, and cost-efficient.",
    features: [
      "AWS, Azure, or DigitalOcean cloud hosting setups",
      "CI/CD pipelines with Docker and GitHub Actions",
      "Horizontal scaling for high-traffic applications",
      "Database tuning and backup automation"
    ]
  },
  {
    id: 4,
    icon: Wrench,
    emoji: "🛠",
    title: "Software Solutions",
    description: "Custom tools and integrations that solve business problems, automate processes, and connect existing systems seamlessly.",
    features: [
      "Internal web or desktop applications",
      "Third-party API and payment integrations",
      "Data processing and reporting automation scripts",
      "Cross-platform utilities using Python or Node.js"
    ]
  },
  {
    id: 5,
    icon: Palette,
    emoji: "🎨",
    title: "UI/UX & Performance",
    description: "User-focused design and speed optimization that deliver beautiful interfaces and smooth interactions on every device.",
    features: [
      "Mobile-first, pixel-perfect layouts with Tailwind CSS",
      "Wireframes and interactive prototypes in Figma",
      "Site speed and Core Web Vitals optimization",
      "SEO best practices for higher search rankings"
    ]
  },
  {
    id: 6,
    icon: Megaphone,
    emoji: "📢",
    title: "Meta Ads Campaigns",
    description: "Effective Meta ad campaigns designed to grow Shopify stores with targeted traffic, higher conversions, and optimized ROI.",
    features: [
      "Shopify sales campaigns for Meta & Instagram Ads",
      "Custom audience targeting and lookalike strategies",
      "Conversion-focused creatives and ad copies",
      "Performance tracking with detailed analytics"
    ]
  }

];

export function Services() {

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
      
      {/* Luxury background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 md:top-32 left-4 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 md:bottom-32 right-4 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20 luxury-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl luxury-text-gradient">
            Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Delivering exceptional digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid - Perfect 2x3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto justify-items-center items-start">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className={`luxury-slide-up w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto services-card-stagger-${service.id}`}
              >
                <Card className="h-full services-card-luxury services-card-glow group hover:shadow-2xl hover:shadow-primary/10 rounded-xl md:rounded-2xl">
                  {/* Card Content */}
                  <div className="p-5 sm:p-6 md:p-8 h-full flex flex-col relative overflow-hidden">
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] top-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col min-h-[450px] sm:min-h-[500px] md:min-h-[520px]">
                      {/* Icon & Emoji */}
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="p-3 md:p-4 bg-primary/20 rounded-xl md:rounded-2xl group-hover:bg-primary/30 transition-colors duration-300 services-icon-glow">
                            <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                          </div>
                          <span className="text-2xl md:text-3xl filter drop-shadow-lg">{service.emoji}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300 mb-3 md:mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                        {service.description}
                      </p>

                      {/* Highlights Label */}
                      <div className="mb-3 md:mb-4">
                        <h4 className="text-xs md:text-sm text-primary/80 uppercase tracking-wider font-medium">
                          Highlights
                        </h4>
                        <div className="w-6 md:w-8 h-[1px] bg-primary/60 mt-1 services-line-glow"></div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 md:space-y-4 flex-grow">
                        {service.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className="flex items-start gap-2 md:gap-3 group/feature services-feature-reveal"
                            style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.03) + 0.8}s` }}
                          >
                            <Diamond className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary mt-1 md:mt-1.5 flex-shrink-0 fill-current group-hover/feature:text-primary/80 transition-colors duration-300" />
                            <span className="text-xs md:text-sm text-gray-500 leading-relaxed group-hover/feature:text-gray-400 transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Decorative Bottom Line */}
                      <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                        <div className="w-16 md:w-20 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}