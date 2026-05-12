import { Logo } from "../ui/Logo";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import { useCallback } from "react";

export function Footer() {
  const [location, navigate] = useLocation();

  const handleQuickLink = useCallback((e, name) => {
    e.preventDefault();
    if (name === "About") {
      navigate("/about");
      window.scrollTo(0, 0);
    } else {
      const sectionId = name.toLowerCase();
      // If not on home page, navigate to home first with hash
      if (location !== "/") {
        navigate("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [navigate, location]);
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
                    href={name === "About" ? "/about" : `#${name.toLowerCase()}`}
                    onClick={(e) => handleQuickLink(e, name)}
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
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                <a href="mailto:engineering@sairag.net" className="hover:underline" style={{ color: "var(--accent)" }}>
                  engineering@sairag.net
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                <span>+91-8668479379</span>
              </li>
              <li className="flex items-start gap-2.5 leading-relaxed">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                <span>
                  F102, Mahindra Royale Society,<br />
                  Nehru Nagar, Pimpri,<br />
                  Pune - 411018, India
                </span>
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