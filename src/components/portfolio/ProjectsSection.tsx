import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Lightbulb, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Enterprise Cash Flow Management System",
    domain: "Financial Management · Go-Live",
    link: "https://github.com/NhuQuynh9548",
    problem: "Enterprise lacked a unified system for managing income and expenses, leading to fragmented financial tracking across departments.",
    solution: "Led business requirement analysis. Created BRD, FRD, user stories, acceptance criteria, and system flow diagrams. Worked closely with developers during implementation.",
    impact: "Successfully deployed system to production. Supported enhancement phase and ensured scalable financial management for the organization.",
    tags: ["BRD", "FRD", "User Stories", "System Flows"],
  },
  {
    title: "POS - CRM System",
    domain: "Retail & Inventory · Graduation Project",
    link: "https://github.com/NhuQuynh9548",
    problem: "No integrated solution for point-of-sale, customer relationship management, and inventory tracking, causing data silos and operational inefficiency.",
    solution: "Analyzed and documented requirements for POS, CRM, and inventory modules. Designed system workflows and database structure. Supported frontend–backend alignment and API specifications.",
    impact: "Delivered a fully functional system with optimized workflows. Assisted in testing and system optimization for reliable performance.",
    tags: ["Process Mapping", "Database Design", "API Specs"],
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Case Studies</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Projects That Made an Impact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
            >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                transform: hoveredIndex === i ? "perspective(800px) rotateY(-3deg) rotateX(3deg) scale(1.02)" : "perspective(800px) rotateY(0) rotateX(0) scale(1)",
                transition: "transform 0.4s ease-out, box-shadow 0.4s ease-out",
                boxShadow: hoveredIndex === i ? "0 20px 40px hsl(var(--lavender) / 0.15)" : "none",
              }}
            >
              {/* Header */}
              <div className="gradient-lavender-rose p-6">
                <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">{project.domain}</span>
                <h3 className="font-heading text-xl font-semibold mt-2 text-foreground flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                <div className="flex gap-3">
                  <Target className="w-4 h-4 text-rose mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Problem</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Lightbulb className="w-4 h-4 text-lavender mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Solution</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="w-4 h-4 text-sage mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
