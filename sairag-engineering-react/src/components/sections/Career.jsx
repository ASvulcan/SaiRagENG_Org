import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Career() {
  return (
    <section
      id="career"
      className="min-h-screen py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-10">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Career
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Join SaiRag Engineering
          </h2>

          {/* Divider */}
          <div
            className="w-full h-px mt-8 mb-16"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-[1150px]"
        >
          <div
            className="space-y-10 text-sm md:text-[17px] leading-[2]"
            style={{ color: "var(--text-muted)" }}
          >
            <p className="max-w-[1100px]">
              We are always interested in connecting with talented engineers
              and design professionals who share our commitment to precision,
              quality, and reliable delivery.
            </p>

            <p>
              For career inquiries, please reach out to us at the email below.
            </p>
          </div>

          {/* Email */}
          <div className="mt-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "var(--accent)" }}
            >
              Career Enquiries
            </span>

            <a
              href="mailto:projects@sairag.net"
              className="group inline-flex items-center gap-3 text-lg md:text-2xl font-medium transition-colors"
              style={{ color: "var(--text)" }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color = "var(--text)")
              }
            >
              projects@sairag.net

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
                style={{ color: "var(--accent)" }}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}