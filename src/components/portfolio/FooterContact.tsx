import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const FooterContact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Collaborate
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm actively seeking opportunities in Business Analysis. If you think I'd be a great fit for your team, let's connect.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:priya.sharma@email.com"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Priya Sharma · Designed with analytical precision
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;
