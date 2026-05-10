import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-8 h-8 text-accent" />
              <div>
                <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>SaiRag Engineering</div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>Engineering LLP</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Advanced Façade Engineering & Mechanical Design Solutions.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--accent)" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Career", "Contact"].map((name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase()}`}
                    className="text-sm transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--accent)" }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>
                <a href="mailto:engineering@sairag.net" className="hover:underline" style={{ color: "var(--accent)" }}>
                  engineering@sairag.net
                </a>
              </li>
              <li>+91-8668479379</li>
              <li className="leading-relaxed">
                F102, Mahindra Royale Society,<br />
                Nehru Nagar, Pimpri,<br />
                Pune - 411018, India
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <p>&copy; 2024 SaiRag Engineering LLP. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Engineering Precision</span>
            <span>Delivered Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}