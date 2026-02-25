import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    year: "2022 – 2026",
    title: "Bachelor of Management Information Systems",
    org: "University of Finance and Marketing",
    description: "GPA: 3.32/4.0. Focused on information systems, databases, and business process management.",
    type: "education" as const,
  },
  {
    icon: Briefcase,
    year: "Mar 2025 – Aug 2025",
    title: "Business Analyst Intern",
    org: "Bravo Software",
    description: "Assisted in requirement gathering sessions with stakeholders. Modeled business processes using UML and BPMN diagrams. Improved communication flow between technical and business teams.",
    type: "work" as const,
  },
  {
    icon: Rocket,
    year: "2025",
    title: "POS - CRM System (Graduation Project)",
    org: "University Project",
    description: "Analyzed and documented requirements for POS, CRM, and inventory modules. Designed system workflows and database structure.",
    type: "project" as const,
  },
  {
    icon: Briefcase,
    year: "Sep 2025 – Present",
    title: "Business Analyst Fresher",
    org: "BlueBolt Software",
    description: "Gathered and analyzed requirements for enterprise income–expense system. Produced full BA documentation: BRD, FRD, user stories, workflow diagrams, and screen specifications.",
    type: "work" as const,
  },
  {
    icon: Award,
    year: "2026",
    title: "Enterprise Cash Flow System (Go-Live)",
    org: "BlueBolt Software · Internal Product",
    description: "Led business requirement analysis for the enterprise financial management platform. Successfully deployed system to production.",
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
