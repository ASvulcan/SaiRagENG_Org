import { motion } from "framer-motion";
import { useRef, useCallback } from "react";

const items = [
  "Shop Drawings",
  "Fabrication Drawings",
  "General Arrangement (GA) Drawings",
  "Installation Drawings",
  "3D Models and Assemblies",
  "Bills of Quantities (BOQs) & Material Take-offs",
];

const cardClass = "card rounded-xl p-6 flex items-center justify-center text-center group";

function DeliverableCard({ item, i }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mouse-x", `${x}%`);
    ref.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    ref.current?.style.setProperty("--mouse-x", "50%");
    ref.current?.style.setProperty("--mouse-y", "50%");
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      key={i}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      className={cardClass}
    >
      <span className="text-base font-medium leading-snug group-hover:text-accent group-hover:scale-[1.02] transition-all duration-300" style={{ color: "var(--text-muted)" }}>
        {item}
      </span>
    </motion.div>
  );
}

export function Deliverables() {
  return (
    <section className="min-h-screen py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <DeliverableCard key={i} item={item} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-base font-medium mt-8"
          style={{ color: "var(--text-muted)" }}
        >
          and Custom Deliverables Based on Client Requirements
        </motion.p>
      </div>
    </section>
  );
}