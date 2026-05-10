import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Career() {
  return (
    <section id="career" className="py-20 md:py-28" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--accent)" }}>
                Career
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6" style={{ color: "var(--text)" }}>
              Join SaiRag Engineering
            </h2>
            <div className="space-y-4 text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
              <p>
                We are always interested in connecting with talented engineers and design professionals who share our commitment to precision, quality, and reliable delivery.
              </p>
              <p>
                For career inquiries, please reach out to us at the email below.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card rounded-xl p-8 md:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: "var(--accent)" }}>
              Career Enquiries
            </span>
            <a
              href="mailto:engineering@sairag.net"
              className="group inline-flex items-center gap-3 text-lg md:text-2xl font-medium transition-colors"
              style={{ color: "var(--text)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
            >
              engineering@sairag.net
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" style={{ color: "var(--accent)" }} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}