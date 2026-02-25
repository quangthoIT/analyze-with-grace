import { motion } from "framer-motion";
import { LayoutGrid, FileText, Figma, Database, Workflow, BarChart3, PenTool, Sparkles, Table2 } from "lucide-react";

const toolsRow1 = [
  { name: "StarUML", icon: PenTool, color: "#E74C3C" },
  { name: "Draw.io", icon: Workflow, color: "#F08705" },
  { name: "Lucidchart", icon: LayoutGrid, color: "#F5A623" },
  { name: "Figma", icon: Figma, color: "#A259FF" },
  { name: "BPMN / UML", icon: FileText, color: "#3498DB" },
];

const toolsRow2 = [
  { name: "SQL Server", icon: Database, color: "#CC2927" },
  { name: "PostgreSQL", icon: Database, color: "#336791" },
  { name: "Excel", icon: Table2, color: "#217346" },
  { name: "AI Tools", icon: Sparkles, color: "#8B5CF6" },
  { name: "REST API", icon: BarChart3, color: "#10B981" },
];

const TechStack = () => {
  const doubled1 = [...toolsRow1, ...toolsRow1];
  const doubled2 = [...toolsRow2, ...toolsRow2];

  return (
    <section className="py-24 sm:py-32 gradient-subtle overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Tools & Domains</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            My Analytical Toolkit
          </h2>
        </motion.div>
      </div>

      {/* Row 1 - Right to Left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee">
          {doubled1.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex-shrink-0 mx-6 glass-card rounded-2xl px-10 py-8 flex flex-col items-center gap-4 min-w-[160px] hover:glow-primary transition-all duration-300"
            >
              <tool.icon className="w-8 h-8" style={{ color: tool.color }} />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Left to Right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee-reverse">
          {doubled2.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="flex-shrink-0 mx-6 glass-card rounded-2xl px-10 py-8 flex flex-col items-center gap-4 min-w-[160px] hover:glow-primary transition-all duration-300"
            >
              <tool.icon className="w-8 h-8" style={{ color: tool.color }} />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
