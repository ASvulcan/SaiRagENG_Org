import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "engineering@sairag.net",
    href: "mailto:engineering@sairag.net",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-8668479379",
    href: "tel:+918668479379",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "F102, Mahindra Royale Society, Nehru Nagar, Pimpri, Pune - 411018, India",
    href: null,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback
    const subject = encodeURIComponent("Contact from SaiRag Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:engineering@sairag.net?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`card rounded-xl p-5 flex flex-col items-start gap-3 ${i === 2 ? "sm:col-span-2" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-light)" }}
                >
                  <c.icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
                    {c.title}
                  </h3>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-sm font-medium transition-colors"
                      style={{ color: "var(--text)" }}
                      onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.target.style.color = "var(--text)")}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <address className="text-sm font-medium not-italic leading-relaxed" style={{ color: "var(--text)" }}>
                      {c.value}
                    </address>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card rounded-xl p-6 md:p-8"
          >
            <h3 className="text-base font-bold mb-5" style={{ color: "var(--text)" }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-lg border transition-colors outline-none focus:ring-2 focus:ring-accent-rgb/30"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-lg border transition-colors outline-none focus:ring-2 focus:ring-accent-rgb/30"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                  }}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border transition-colors outline-none resize-none focus:ring-2 focus:ring-accent-rgb/30"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--border)",
                  }}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn-accent inline-flex items-center gap-2 w-full justify-center"
              >
                <Send size={16} />
                {sent ? "Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
            Follow Us: <span className="italic font-normal" style={{ color: "var(--text-muted)" }}>Coming soon.</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}