import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Lightbulb, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Checkout Optimization",
    domain: "Retail & E-Commerce",
    problem: "Cart abandonment rate of 68% due to a convoluted 5-step checkout process with unclear error handling.",
    solution: "Conducted user journey mapping and stakeholder interviews. Designed a streamlined 2-step checkout flow with inline validation and progress indicators.",
    impact: "Reduced cart abandonment by 34% and increased conversion rate by 22% within the first quarter.",
    tags: ["User Journey Mapping", "Wireframing", "A/B Testing"],
  },
  {
    title: "HR Onboarding Process Automation",
    domain: "Human Resources",
    problem: "Manual onboarding taking 12 days average with 40+ documents and 6 departments involved, leading to poor new-hire experience.",
    solution: "Mapped the AS-IS process using BPMN, identified redundancies, and designed a TO-BE workflow with automated document routing and digital signatures.",
    impact: "Cut onboarding time to 3 days and improved new-hire satisfaction scores by 45%.",
    tags: ["BPMN", "Process Mapping", "Requirements Doc"],
  },
  {
    title: "Customer Insights Dashboard",
    domain: "Data Analytics",
    problem: "Stakeholders relied on static monthly reports, causing delayed decision-making and missed market trends.",
    solution: "Gathered requirements from 8 stakeholders, defined KPIs, and created interactive Power BI dashboards with real-time data connections.",
    impact: "Enabled real-time decision making, reducing report generation time by 80% and improving data accessibility for 50+ users.",
    tags: ["Power BI", "SQL", "Stakeholder Analysis"],
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
