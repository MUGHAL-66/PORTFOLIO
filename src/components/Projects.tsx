import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Frontend Projects - Your actual portfolio projects
const frontendProjects = [
  {
    id: 1,
    title: "LuxuryHomes",
    description:
      "A modern React-based real estate website showcasing luxury homes, property listings, and responsive UI design. Built for an elegant user experience with clean layouts and smooth navigation.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "UI/UX",
    ],
    image:
      "https://images.unsplash.com/photo-1649769425787-bb8f1119b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwaG9tZXN8ZW58MXx8fHwxNzU4MTIwMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    liveDemo: "https://mughal-66.github.io/Luxury-Homes/",
    sourceCode: "https://github.com/MUGHAL-66/Luxury-Homes",
  },
  {
    id: 2,
    title: "AquaAid",
    description:
      "An interactive React application focused on clean water awareness and resources. Features informative sections, responsive layouts, and engaging visuals to promote accessibility and awareness.",
    techStack: [
      "React",
      "JavaScript",
      "CSS3",
      "HTML5",
      "UI/UX",
    ],
    image:
      "https://images.unsplash.com/photo-1741081038901-f258dd2f5a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBmbG9vZCUyMGRpc2FzdGVyJTIwd2F0ZXIlMjBjcmlzaXN8ZW58MXx8fHwxNzU4MTI1MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    liveDemo: "https://mughal-66.github.io/AquaAid/",
    sourceCode: "https://github.com/MUGHAL-66/AquaAid",
  },
  {
    id: 3,
    title: "SkySphere Weather Forecast",
    description:
      "A real-time weather forecasting application with dynamic visuals and responsive design. Displays temperature, conditions, and forecasts using external APIs for live weather data.",
    techStack: ["React", "JavaScript", "Responsive", "CSS"],
    image:
      "https://images.unsplash.com/photo-1571733949554-f9c9c0bbdab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwc3RhdGlvbiUyMG1ldGVvcm9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc1ODEyNTA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    liveDemo:
      "https://mughal-66.github.io/SkySphere-Weather-Forecast/",
    sourceCode:
      "https://github.com/MUGHAL-66/SkySphere-Weather-Forecast",
  },
  {
    id: 4,
    title: "Serenique Digital Wellness Tool",
    description:
      "A wellness-focused dashboard for tracking digital habits, productivity, and screen time. Includes data visualization, progress charts, and personalized insights for improved digital well-being.",
    techStack: [
      "React",
      "Chart.js",
      "JavaScript",
      "CSS3",
      "UI/UX",
    ],
    image:
      "https://images.unsplash.com/photo-1688811364750-92892da5497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBkaWdpdGFsJTIwd2VsbG5lc3MlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc1ODEyNTA1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    liveDemo:
      "https://mughal-66.github.io/Serenique-Digital-Wellness-Tool/",
    sourceCode:
      "https://github.com/MUGHAL-66/Serenique-Digital-Wellness-Tool",
  },
  {
    id: 5,
    title: "WoodenWhisper",
    description:
      "A modern, fully responsive furniture e-commerce web app featuring product listings, detailed product pages, and a sleek cart system. Built with Vite + React for fast performance and deployed on GitHub Pages.",
    techStack: [
      "React",
      "TypeScript",
      "E-commerce",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1686998544041-454ee20d93de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBlY29tbWVyY2UlMjBzdG9yZXxlbnwxfHx8fDE3NTgxMjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    liveDemo: "https://mughal-66.github.io/WoodenWhisper/",
    sourceCode: "https://github.com/MUGHAL-66/WoodenWhisper",
  },
  {
    id: 6,
    title: "Luxury Travel Planner",
    description:
      "A responsive travel planning platform where users can explore destinations, create itineraries, and manage trips. Includes elegant UI components and smooth page transitions for a premium experience.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1616611213095-58abb651f70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBwbGFubmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1ODEyMDM0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    liveDemo:
      "https://mughal-66.github.io/Packtrack-Travel-Planner/",
    sourceCode:
      "https://github.com/MUGHAL-66/Packtrack-Travel-Planner",
  },
{
  id: 7,
  title: "TechStart",
  description: "TechStart delivers innovative tech solutions. We help businesses grow and transform digitally. Our expert team builds products that exceed expectations. From startups to enterprises, we drive impactful change.",
  techStack: ["React", "HTML", "Tailwind CSS", "UI/UX"],
  image: "https://images.unsplash.com/photo-1742836531236-0e439730dd27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3MlMjBzdGFydHVwJTIwdGVjaHxlbnwxfHx8fDE3NTgxMzY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  liveDemo: "https://mughal-66.github.io/Landing-Page/index.html",
  sourceCode: "https://github.com/MUGHAL-66/Landing-Page",
},
  {
  id: 8,
  title: "Fixigo Repair System",
  description: "Fixigo provides a premium device repair experience. Transform broken devices into like-new condition quickly. Expert technicians ensure guaranteed results. Fast, reliable service with 90-day warranty.",
  techStack: ["React", "HTML", "Tailwind CSS", "UI/UX"],
  image: "https://images.unsplash.com/photo-1579370740910-0aaeeb2d29b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHJlcGFpciUyMHNob3AlMjBzZXJ2aWNlfGVufDF8fHx8MTc1ODEzNjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  liveDemo: "https://mughal-66.github.io/Fixigo-Frontend-Design/",
  sourceCode: "https://github.com/MUGHAL-66/Fixigo-Frontend-Design",
},
{
  id: 9,
  title: "Zaiqa-e-Nawab",
  description: "Zaiqa-e-Nawab is a modern restaurant website frontend to deliver a premium dining experience online. It showcases menu items, booking options, and restaurant details in engaging way.",
  techStack: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80", 
  liveDemo: "https://MUGHAL-66.github.io/Zaiqa-e-Nawab/",
  sourceCode: "https://github.com/MUGHAL-66/Zaiqa-e-Nawab",
},
{
  id: 10,
  title: "CityCare Portal",
  description:
    "CityCare is a modern frontend web application built as the user-facing layer of a comprehensive smart-city ecosystem.It provides citizens, city administrators, and service providers with real-time access to essential city services.",
  techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  image: "https://plus.unsplash.com/premium_photo-1745182312666-c63765272eb8?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  liveDemo: "https://MUGHAL-66.github.io/Citycare-Portal/",
  sourceCode: "https://github.com/MUGHAL-66/Citycare-Portal",
},
{
  id: 11,
  title: "Event Countdown Timer",
  description:
    "A modern, responsive Event Countdown Timer built with HTML, CSS, and JavaScript. Features include a live countdown to any specified date and time, local storage support to remember settings. Ideal for personal events, launches, or any occasion.",
  techStack: ["HTML", "CSS", "JavaScript"],
  image: "https://images.unsplash.com/photo-1588294566715-767838bf5b8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  liveDemo: "https://MUGHAL-66.github.io/event-countdown-timer/",
  sourceCode: "https://github.com/MUGHAL-66/event-countdown-timer",
},
{
  id: 12,
  title: "SkillLoop – Skill Swap Platform",
  description:
    "A modern skill-sharing web app Frontend design where users teach what they know and learn in return, featuring authentication, skill search, profiles, messaging, and a scheduling calendar—all fully responsive.",
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS"
  ],
  image:
    "https://plus.unsplash.com/premium_photo-1661372012626-90b9e5001cea?q=80&w=885&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  liveDemo: "https://mughal-66.github.io/Skillloop-Skill-Swap/",
  sourceCode: "https://github.com/MUGHAL-66/Skillloop-Skill-Swap",
},
{
  id: 13,
  title: "GreenLedger – Carbon Tracking Platform",
  description:
    "A community-driven web app for tracking and reducing your carbon footprint. Users can join challenges, set goals, track activities, and see their environmental impact in real time. Fully responsive frontend built with React and Vite.",
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS"
  ],
  image:
    "https://plus.unsplash.com/premium_photo-1733317270278-772ee47c86d7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual screenshot URL
  liveDemo: "https://MUGHAL-66.github.io/GreenLedger/",
  sourceCode: "https://github.com/MUGHAL-66/GreenLedger",
},
{
  id: 14,
  title: "Responza – Modern Survey & Form Platform",
  description:
    "Responza is a sleek, fully responsive survey and form-management web application. Built with a React-driven frontend, it lets users create, distribute, and analyze surveys in real time with intuitive dashboards and smooth interactions.",
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS"
  ],
  image:
    "https://images.unsplash.com/photo-1587116987844-bd3d2f866f16?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual screenshot URL
  liveDemo: "https://MUGHAL-66.github.io/Responza/",
  sourceCode: "https://github.com/MUGHAL-66/Responza",
},
{
  id: 15,
  title: "NearNow – Hyper-Local Event Discovery",
  description:
    "NearNow is a modern, mobile-first event-discovery web app designed to connect neighbors with live happenings in their area. Users can browse curated categories, RSVP, and engage with organizers in real time.",
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS"
  ],
  image:
    "https://images.unsplash.com/photo-1621112904887-419379ce6824?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual screenshot URL
  liveDemo: "https://MUGHAL-66.github.io/NearNow/",
  sourceCode: "https://github.com/MUGHAL-66/NearNow",
},

{
  id: 17,
  title: "Hustle App – Modern React Web Application",
  description:
    "Hustle App is a modern finance and productivity platform tailored for freelancers and side-hustlers. Built with React and TypeScript, it helps users manage income, expenses, goals, and tax estimates in one place With beautiful charts, responsive UI, and smooth animations.",
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS"
  ],
  image:
    "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual screenshot URL
  liveDemo: "https://MUGHAL-66.github.io/HustleLedger/",
  sourceCode: "https://github.com/MUGHAL-66/HustleLedger",
},
{
  id: 18,
  title: "QuickHood – Hyper-Local Delivery Platform",
  description:
    "QuickHood is a hyper-local delivery platform connecting customers with nearby artisans, bakers, florists, and home cooks. Built with modern React tooling, it emphasizes community-driven experiences, offering fresh, handcrafted, and authentic products from small local vendors.",
  techStack: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS"
  ],
  image:
    "https://images.unsplash.com/photo-1662899311670-7e6bbe986166?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual screenshot URL
  liveDemo: "https://MUGHAL-66.github.io/QuickHood/",
  sourceCode: "https://github.com/MUGHAL-66/QuickHood",
},


];

// Full-Stack Projects - Complete web applications with backend
const fullStackProjects = [
  {
    id: 12,
    title: "Calculator App",
    description:
      "An interactive calculator web application built using HTML, CSS, and JavaScript. This repository contains the code for a sleek and user-friendly calculator interface, allowing users to perform basic arithmetic operations seamlessly within their web browser.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image:
      "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MjE3MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
   
    sourceCode: "https://github.com/MUGHAL-66/Calculator-App-in-Html-Css-Javascript",
  },

{
    id: 13,
    title: "Login Form",
    description:
      "This repository contains a simple and responsive login form created using HTML, CSS, and JavaScript. The form includes basic validation for email format and password length, implemented with JavaScript. Its clean and user-friendly design.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image:
      "https://media.istockphoto.com/id/2188225039/photo/woman-registering-online-account-on-laptop-with-coffee-and-water-on-desk.jpg?s=1024x1024&w=is&k=20&c=afQSSeltbUJ_tSN6eoMCiXriRwD6xJgoWOjknB4uNaE=",
    sourceCode: "https://github.com/MUGHAL-66/LogIn-Form-in-htmls-css-java",
},

  {
    id: 14,
    title: "Adab-e-Jahan",
    description:
      "Design (Angular) for a digital library where writers can upload and sell books.Users can read, download, or purchase books seamlessly. The platform offers a clean and intuitive interface for easy navigation.Designed to provide a seamless reading.",
    techStack: [
      "Angular",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // replace with preferred image
    sourceCode: "https://github.com/MUGHAL-66/Adab-e-jahan",
},
  {
    id: 15,
    title: "Student Evaluation System",
    description:
      "A C# project for evaluating student performance and managing academic records.Teachers can enter grades, track progress, and generate detailed evaluation reports. The system streamlines assessment processes and improves data accuracy.",
    techStack: [
      "C#",
      ".NET Framework",
      "SQL Server"
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661270474108-2c2e60c4ff15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceCode: "https://github.com/MUGHAL-66/SE_Project-Student-Evaluation-System",
},
  {
    id: 16,
    title: "DailySpark",
    description:
      "DailySpark is a modern and interactive motivational quote generator designed to brighten your day with inspiring words. Each time you refresh the page or click the “New Quote” button, it delivers a fresh, uplifting quote to keep you motivated.",  
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image:
      "https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceCode: "https://github.com/MUGHAL-66/DailySpark",
},



];

// Frontend Project Card Component (with Live Demo and View Code)
function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="bg-card border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] luxury-glow">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Project Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-3">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-black luxury-glow"
              asChild
            >
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="text-white/70 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-white/10 text-white/80 hover:bg-primary/20 hover:text-primary transition-colors duration-200 luxury-shimmer"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-3 pt-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-primary hover:text-primary/80 p-0 transition-all duration-300"
            asChild
          >
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
          <span className="text-white/30">|</span>
          <Button
            size="sm"
            variant="ghost"
            className="text-white/70 hover:text-white p-0 transition-all duration-300"
            asChild
          >
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Full-Stack Project Card Component (only View Code button)
function FullStackProjectCard({ project }: { project: any }) {
  return (
    <Card className="bg-card border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] luxury-glow">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Project Actions Overlay - Only View Code */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-3">
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="text-white/70 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-white/10 text-white/80 hover:bg-primary/20 hover:text-primary transition-colors duration-200 luxury-shimmer"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Project Links - Only View Code */}
        <div className="flex space-x-3 pt-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-white/70 hover:text-white p-0 transition-all duration-300"
            asChild
          >
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-96 h-96 bg-primary rounded-full blur-3xl luxury-float"></div>
        <div
          className="absolute bottom-32 right-20 w-80 h-80 bg-primary rounded-full blur-3xl luxury-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center space-y-16">
          {/* Main Section Header */}
          <div className="space-y-4 luxury-fade-in">
            <h2 className="text-3xl md:text-4xl luxury-text-gradient">
              Featured Projects
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              A showcase of my work spanning frontend interfaces
              and full-stack applications, demonstrating
              creativity, technical expertise, and user-focused
              design
            </p>
            <div className="w-24 h-[3px] bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full mx-auto luxury-shimmer"></div>
          </div>

          {/* Frontend Projects Section */}
          <div className="space-y-8 luxury-slide-up">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl text-white luxury-glow">
                Frontend Projects
              </h3>
              <div className="w-20 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full mx-auto"></div>
              <p className="text-white/50 max-w-2xl mx-auto">
                Client-side focused applications showcasing
                modern UI/UX design, interactive user
                experiences, and responsive web development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frontendProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="luxury-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Full-Stack Projects Section */}
          <div
            className="space-y-8 luxury-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl text-white luxury-glow">
                Full-Stack Projects
              </h3>
              <div className="w-20 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full mx-auto"></div>
              <p className="text-white/50 max-w-2xl mx-auto">
                Complete web applications with robust backend
                architecture, database management, and
                comprehensive functionality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullStackProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="luxury-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <FullStackProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}