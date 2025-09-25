import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "uh.2029@gmail.com",
    href: "mailto:uh.2029@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/UsmanHassan",
    href: "https://linkedin.com/in/UsmanHassan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@MUGHAL-66",
    href: "https://github.com/MUGHAL-66",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@scaarsandstrength",
    href: "https://instagram.com/scaarsandstrength",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mobile-padding-md">
      <div className="max-w-4xl mx-auto mobile-container">
        <div className="text-center mobile-spacing-lg">
          <div className="mobile-spacing-sm">
            <h2 className="mobile-text-3xl luxury-text-gradient">
              Building Smarter Digital Experiences
            </h2>
            <p className="mobile-text-base text-white/70 max-w-2xl mx-auto">
              Exploring opportunities as an AI Engineer /
              Full-Stack AI Developer, while collaborating on
              projects that drive innovation and create value.
            </p>
          </div>

          <div className="grid mobile-grid-2 gap-6 md:gap-8">
            {/* Contact Information */}
            <Card className="bg-card border-white/10 p-4 sm:p-6 md:p-8 mobile-spacing-sm">
              <h3 className="mobile-text-base text-white text-left">
                Get In Touch
              </h3>

              <div className="mobile-spacing-sm">
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="mobile-text-sm">Gujrat, PAKISTAN</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="mobile-text-sm">+923107243590</span>
                </div>
              </div>

              <div className="mobile-spacing-sm">
                {contactLinks.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group min-h-11"
                    >
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs md:text-sm text-white/60">
                          {contact.label}
                        </div>
                        <div className="mobile-text-sm text-white/80 group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="bg-card border-white/10 p-4 sm:p-6 md:p-8">
              <form className="mobile-spacing-sm">
                <h3 className="mobile-text-base text-white text-left">
                  Send a Message
                </h3>

                <div className="mobile-spacing-sm">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 md:p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300 min-h-11 mobile-text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 md:p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300 min-h-11 mobile-text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 md:p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300 min-h-11 mobile-text-sm"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full p-3 md:p-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none mobile-text-sm"
                    ></textarea>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-black mobile-button transition-all duration-300 transform hover:scale-[1.02] mobile-text-sm"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 md:p-8 rounded-2xl border border-primary/20">
            <div className="mobile-spacing-sm">
              <h3 className="mobile-text-xl text-white">
                Ready to Start Your Project?
              </h3>
              <p className="mobile-text-sm text-white/70">
                I'm currently available for new opportunities
                and exciting collaborations.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-black mobile-button transition-all duration-300 transform hover:scale-105 mobile-text-sm"
                asChild
              >
                <a href="mailto:uh.2029@gmail.com">
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}