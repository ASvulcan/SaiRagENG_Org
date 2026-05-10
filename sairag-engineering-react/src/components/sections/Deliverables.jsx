import { motion } from "framer-motion";

const items = [
  "Shop Drawings",
  "Fabrication Drawings",
  "General Arrangement (GA) Drawings",
  "Installation Drawings",
  "3D Models and Assemblies",
  "Bills of Quantities (BOQs) & Material Take-offs",
];

export function Deliverables() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--accent)" }}>
              Our Deliverables
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Project-Ready Outputs
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            We provide structured, project-ready engineering outputs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card rounded-xl p-5 flex items-center justify-center text-center group"
            >
              <span className="text-sm font-medium leading-snug group-hover:font-semibold transition-all" style={{ color: "var(--text-muted)" }}>
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}