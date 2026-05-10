import { motion } from "framer-motion";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { useEffect, useState, useRef } from "react";

function Counter({ from, to, suffix = "", label }) {
  const [count, setCount] = useState(from);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * (to - from) + from);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(to);
    };
    requestAnimationFrame(animate);
  }, [started, from, to]);

  return (
    <div ref={ref} className="border-l-2 pl-4" style={{ borderColor: "var(--accent)" }}>
      <div className="text-2xl md:text-3xl font-bold font-mono mb-1" style={{ color: "var(--text)" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const stats = [
    { from: 2000, to: 2023, label: "Year Founded" },
    { from: 0, to: 26, suffix: "+", label: "Projects Delivered" },
    { from: 40000, to: 49000, suffix: "+", label: "Engineering Hours" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px" style={{ backgroundColor: "var(--accent)" }} />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "var(--accent)" }}>
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
                SaiRag Engineering LLP
              </h2>
              <p className="text-sm mt-2 font-medium" style={{ color: "var(--accent)" }}>
                Founded in 2023
              </p>
            </motion.div>

            {/* Our Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-16 max-w-4xl"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <span className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Our Foundation
              </h3>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  SaiRag Engineering LLP was established with a clear objective—to deliver high-quality, reliable engineering support in the field of facade design and detailing. Based in Pune, India, we have steadily built our capabilities by working closely with international clients, particularly across Europe.
                </p>
                <p>
                  Beginning with façade engineering, we have expanded our expertise to include mechanical design services, enabling us to support a broader range of engineering requirements. Our growth has been driven by a consistent focus on precision, technical understanding, and adherence to global standards.
                </p>
                <p>
                  Today, we operate as a dependable offshore partner, supporting clients with accurate, buildable, and well-coordinated engineering solutions.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-3 gap-6 mb-16"
            >
              {stats.map((s) => (
                <Counter key={s.label} from={s.from} to={s.to} suffix={s.suffix || ""} label={s.label} />
              ))}
            </motion.div>

            {/* Word from Our CEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-16 p-8 md:p-10 rounded-xl card"
            >
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <span className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Word from Our CEO
              </h3>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>SaiRag Engineering was founded with a clear objective — to deliver dependable, technically sound, and execution-focused engineering solutions in the façade industry.</p>
                <p>Over the past few years, we have had the opportunity to contribute to several complex façade projects across Europe, particularly in timber façade systems. These projects demand not only technical expertise, but also a deep understanding of coordination, constructability, detailing precision, and adherence to international standards.</p>
                <p>While SaiRag Engineering is a young organization, my professional journey spans more than three decades across Mechanical and Automobile Engineering. Working on technically demanding assignments for international clients has shaped our approach to quality, discipline, and engineering responsibility.</p>
                <p>Our team brings experience in both timber and aluminium façade systems, enabling us to approach projects with broader technical perspective and practical engineering judgement. Despite the challenges that come with complex global projects — evolving design inputs, coordination requirements, and demanding timelines — our team has consistently delivered with commitment and professionalism.</p>
                <p>What we value most is the trust we have built through reliable delivery, technical depth, and attention to detail.</p>
                <p>As we continue to grow, our focus remains unchanged: delivering precise, buildable, and standards-driven engineering solutions while building long-term partnerships with our clients.</p>
                <p>We look forward to the journey ahead.</p>
                <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <p className="font-semibold" style={{ color: "var(--text)" }}>— Ravindra Vaddavalli</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>Founder & CEO, SaiRag Engineering LLP</p>
                </div>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <span className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Our Mission
              </h3>
              <p className="text-sm md:text-base mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Our mission is to provide engineering solutions that combine accuracy, efficiency, and practical applicability. We are committed to supporting our clients with:
              </p>
              <ul className="space-y-2 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>High-quality facade and mechanical design deliverables</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Clear, coordinated, and standards-compliant documentation</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Reliable project execution aligned with client expectations</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>A professional and transparent approach to collaboration</li>
              </ul>
              <p className="text-sm md:text-base mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                We aim to contribute to our clients' success by ensuring that every design output is technically sound and ready for execution.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-16"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <span className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Our Vision
              </h3>
              <p className="text-sm md:text-base italic mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                &ldquo;We aspire to become a trusted engineering partner for global clients, recognized for consistency, technical excellence, and reliability.&rdquo;
              </p>
              <p className="text-sm md:text-base mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>Our vision is to:</p>
              <ul className="space-y-2 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Strengthen our position in facade engineering and mechanical design services</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Continuously enhance our capabilities in CAD, BIM, and advanced engineering tools</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Expand our presence across European and international markets</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Build long-term partnerships based on trust, quality, and performance</li>
              </ul>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <span className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Our Approach
              </h3>
              <p className="text-sm md:text-base italic mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                &ldquo;At SaiRag Engineering, we believe that quality engineering is defined by attention to detail, clarity in communication, and a deep understanding of real-world execution.&rdquo;
              </p>
              <p className="text-sm md:text-base mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>Our work is guided by:</p>
              <ul className="space-y-2 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>A strong focus on precision and detailing</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Alignment with international standards and best practices</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Seamless integration with client standards and workflows</li>
                <li className="flex items-start gap-2"><span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>▹</span>Commitment to timely and consistent delivery</li>
              </ul>
            </motion.div>

            {/* Working with Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--text)" }}>
                <span className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                Working with Us
              </h3>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>We collaborate with façade consultants, contractors, fabricators, and engineering firms who value dependable support and high-quality outputs.</p>
                <p>By combining technical expertise with a structured and professional approach, we ensure that our clients receive engineering solutions they can rely on.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}