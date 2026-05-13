import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

function GlowCard({ className, children, ...props }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    ref.current.style.setProperty(
      "--mouse-x",
      `${((e.clientX - rect.left) / rect.width) * 100}%`
    );

    ref.current.style.setProperty(
      "--mouse-y",
      `${((e.clientY - rect.top) / rect.height) * 100}%`
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    ref.current?.style.setProperty("--mouse-x", "50%");
    ref.current?.style.setProperty("--mouse-y", "50%");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

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
    value:
      "F102, Mahindra Royale Society, Nehru Nagar, Pimpri, Pune - 411018, India",
    href: null,
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Contact from SaiRag Website"
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:engineering@sairag.net?subject=${subject}&body=${body}`;

    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 md:py-28"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-6 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "var(--accent)" }}
            >
              Contact Us
            </span>

            <div
              className="w-6 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Get in Touch
          </h2>

          <p
            className="mt-4 text-sm md:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            We'd love to hear from you. Please fill out this form.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 md:mt-16">

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">

            {contacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className={i === 2 ? "sm:col-span-2" : ""}
              >
                <GlowCard
                  className={`card rounded-xl p-6 md:p-8 flex ${
                    i === 2
                      ? "flex-row items-center gap-6 min-h-[220px] w-full"
                      : "flex-col items-start gap-4"
                  }`}
                >

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "var(--accent-light)",
                    }}
                  >
                    <c.icon
                      size={20}
                      style={{ color: "var(--accent)" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {c.title}
                    </h3>

                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm md:text-base font-medium transition-colors"
                        style={{ color: "var(--text)" }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = "var(--text)")
                        }
                      >
                        {c.value}
                      </a>
                    ) : (
                      <address
                        className="text-sm md:text-base font-medium not-italic leading-relaxed max-w-lg"
                        style={{ color: "var(--text)" }}
                      >
                        {c.value}
                      </address>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <GlowCard className="card rounded-xl p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <h3
                className="text-base font-bold mb-6"
                style={{ color: "var(--text)" }}
              >
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >

                {/* Name */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Name{" "}
                    <span style={{ color: "var(--accent)" }}>
                      *
                    </span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg border transition-all outline-none focus:ring-2 focus:border-accent"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "var(--border)",
                      "--tw-ring-color":
                        "rgba(var(--accent-rgb), 0.3)",
                    }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email{" "}
                    <span style={{ color: "var(--accent)" }}>
                      *
                    </span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg border transition-all outline-none focus:ring-2 focus:border-accent"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "var(--border)",
                      "--tw-ring-color":
                        "rgba(var(--accent-rgb), 0.3)",
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message{" "}
                    <span style={{ color: "var(--accent)" }}>
                      *
                    </span>
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm rounded-lg border transition-all outline-none resize-none focus:ring-2 focus:border-accent"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text)",
                      borderColor: "var(--border)",
                      "--tw-ring-color":
                        "rgba(var(--accent-rgb), 0.3)",
                    }}
                    placeholder="Leave us a message..."
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn-accent inline-flex items-center gap-2 w-full justify-center py-3"
                >
                  <Send size={16} />
                  {sent ? "Sent!" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </GlowCard>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-10 text-center"
        >
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            Follow Us:{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              Coming soon.
            </span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}