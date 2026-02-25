import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const roles = ["Strategic Thinker", "Requirement Architect", "User Experience Advocate"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedText = roles[roleIndex].substring(0, charIndex);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-subtle">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-lavender-light opacity-60 blur-3xl" />
      <div className="absolute bottom-32 left-1/4 w-96 h-96 rounded-full bg-rose-light opacity-40 blur-3xl" />

      <div className="container relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Business Analyst Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-foreground">Priya Sharma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-10"
        >
          <span className="font-heading text-2xl sm:text-3xl md:text-4xl italic gradient-text">
            {displayedText}
          </span>
          <span className="w-[2px] h-8 bg-primary animate-pulse ml-1" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-xl mx-auto text-muted-foreground text-base sm:text-lg mb-12 leading-relaxed font-body"
        >
          Bridging the gap between business needs and technology solutions through
          structured analysis, stakeholder empathy, and data-driven insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="glass-card glow-primary px-8 py-3.5 rounded-full font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
          >
            <Download className="inline-block w-4 h-4 mr-2 -mt-0.5" />
            Download Case Study
          </a>
          <a
            href="#value"
            className="px-8 py-3.5 rounded-full font-medium text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all duration-300"
          >
            Explore My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
