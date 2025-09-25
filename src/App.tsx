import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Add viewport meta tag for mobile responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Services />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}