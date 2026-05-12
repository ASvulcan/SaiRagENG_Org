import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Box, Building2, Cog } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Façade Engineering",
    icon: Building2,
    isPng: false,
    description: "We provide comprehensive façade design and detailing solutions aligned with project specifications and international standards.",
    items: [
      {
        title: "Curtain Wall Systems",
        subItems: ["Unitized", "Semi-unitized (Stick systems)"],
      },
      "Structural Glazing Systems",
      "Skylights and Canopies",
      "Dry Cladding Systems",
      "Façade Design Development & Detailing",
      "Shop Drawings & Technical Documentation",
    ],
  },
  {
    id: "02",
    title: "Structural Support & Interface Design",
    icon: Layers,
    isPng: false,
    description: "Design and detailing of critical support elements to ensure structural integrity and seamless integration.",
    items: [
      "Mullions and Transoms",
      "Brackets and Anchoring Systems",
      "Embed and Connection Details",
      "Interface Coordination with Primary Structure",
    ],
  },
  {
    id: "03",
    title: "Mechanical Design Services",
    icon: Cog,
    isPng: false,
    description: "Engineering support for mechanical components and assemblies focused on functionality and manufacturability.",
    items: [
      "3D Modeling and Design Development",
      "Mechanical Component Design",
      "Assembly Design and Detailing",
      "Manufacturing and Fabrication Drawings",
    ],
  },
  {
    id: "04",
    title: "CAD & BIM Services",
    icon: Box,
    isPng: false,
    description: "Accurate drafting and modeling support to enhance coordination and project efficiency.",
    items: [
      "2D Drafting and Documentation",
      "3D Modeling and BIM Support",
      "Design Coordination and Clash Detection",
      "Drawing Standardization and Quality Control",
    ],
  },
];

function ServiceCard({ id, title, description, items, open, onToggle, icon: Icon, isPng }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    cardRef.current?.style.setProperty("--mouse-x", "50%");
    cardRef.current?.style.setProperty("--mouse-y", "50%");
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group card relative bg-bg-card backdrop-blur-md border rounded-xl p-7 transition-all duration-500 cursor-pointer ${
        open
          ? "border-accent shadow-2xl shadow-accent-rgb/20 scale-[1.02]"
          : "border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent-rgb/10 hover:-translate-y-2 dark:border-border"
      }`}
      onClick={onToggle}
      // Use transform for GPU-accelerated animations
      style={{ willChange: open ? "transform, box-shadow" : "auto" }}
    >
      {/* Subtle hover glow - using simpler gradient for perf */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-end mb-4">
            <div className="p-2 rounded-lg bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300">
              {isPng ? (
                <img 
                  src={Icon} 
                  alt={title} 
                  className="w-8 h-8 object-contain dark:invert opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                  loading="lazy"
                />
              ) : (
                <Icon className="w-8 h-8 text-accent/70 group-hover:text-accent transition-colors duration-500" />
              )}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-text group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-text-muted">
            {description}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-1 shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className={`transition-colors duration-300 ${open ? "text-red-600" : "text-accent/50 group-hover:text-accent/80"}`}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-4 border-t border-border">
              <ul className="space-y-3">
                {items.map((item, i) => (
                  typeof item === "string" ? (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                      className="flex items-start gap-2.5 text-sm text-text-muted"
                    >
                      <span className="mt-0.5 shrink-0 text-accent text-xs">▹</span>
                      {item}
                    </motion.li>
                  ) : (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                    >
                      <div className="flex items-start gap-2.5 text-sm text-text-muted">
                        <span className="mt-0.5 shrink-0 text-accent text-xs">▹</span>
                        {item.title}
                      </div>
                      <ul className="ml-6 mt-1 space-y-0.5">
                        {item.subItems.map((sub, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-muted pl-5">
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </motion.li>
                  )
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleCard = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="services" className="min-h-screen py-20 md:py-28 relative overflow-hidden bg-bg">
      {/* Subtle gradient accent instead of expensive blur background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] dark:opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            transition: "opacity 0.5s ease",
          }}
        />
      </div>

      {/* Overlay for light mode */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #fcfcfc 100%)",
        }}
      />
      
      {/* Overlay for dark mode */}
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #050505 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ServiceCard
                {...s}
                open={openId === s.id}
                onToggle={() => toggleCard(s.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}