import { motion } from "framer-motion";
import { BrainCircuit, MessageCircle, Cable } from "lucide-react";

const strengths = [
  {
    icon: BrainCircuit,
    title: "Analytical Mindset",
    description: "Strong in requirements analysis, process modeling, and functional documentation. Detail-oriented approach to building scalable business systems.",
  },
  {
    icon: MessageCircle,
    title: "Effective Communication",
    description: "Bridging technical and business teams through clear documentation — BRD, FRD, user stories, and workflow diagrams.",
  },
  {
    icon: Cable,
    title: "Technical Bridge",
    description: "Connecting business objectives with development through system flow design, API specifications, and database structure planning.",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 sm:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-3">Core Strengths</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            What I Bring to the Table
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center group hover:glow-primary transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl gradient-lavender-rose flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
