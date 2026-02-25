import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    year: "2024",
    title: "B.Tech in Computer Science",
    org: "National Institute of Technology",
    description: "Graduated with distinction. Focused on databases, software engineering, and data analytics.",
    type: "education" as const,
  },
  {
    icon: Briefcase,
    year: "2024",
    title: "Business Analyst Intern",
    org: "TechCorp Solutions",
    description: "Assisted in requirements elicitation for a CRM migration project. Created user stories and wireframes.",
    type: "work" as const,
  },
  {
    icon: Award,
    year: "2024",
    title: "ECBA Certification",
    org: "IIBA",
    description: "Earned the Entry Certificate in Business Analysis, validating core BA knowledge and competencies.",
    type: "certification" as const,
  },
  {
    icon: Rocket,
    year: "2025",
    title: "Capstone: Process Automation",
    org: "University Project",
    description: "Led a team of 4 to redesign an HR onboarding workflow, reducing processing time by 75%.",
    type: "project" as const,
  },
];

const JourneyTimeline = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 gradient-subtle">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">My Path</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            The Journey So Far
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Pulse dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-lavender-rose flex items-center justify-center border-4 border-background">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  {/* Animated pulse ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
                </div>

                {/* Content */}
                <div className="glass-card rounded-xl p-5 sm:p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">{item.year}</span>
                    <span className="text-xs text-muted-foreground">{item.org}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
