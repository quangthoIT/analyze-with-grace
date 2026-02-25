import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const FooterContact = () => {
  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          {/* Left column - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left md:w-[60%]"
          >
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Get in Touch</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Collaborate</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              I'm actively seeking opportunities in Business Analysis. If you think I'd be a great fit for your team,
              let's connect.
            </p>

            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="mailto:caonhuquynhwl@gmail.com"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/quynhcao30049548/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/NhuQuynh9548"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right column - 40% Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-[40%] flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary animate-pulse-slow">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
                <img src={avatarImg} alt="Cao Nhu Quynh - Business Analyst" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 Cao Nhu Quynh · Designed with analytical precision</p>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
