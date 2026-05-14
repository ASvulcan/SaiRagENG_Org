import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Logo } from "../ui/Logo";
import { useTheme } from "../../context/ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { dark, toggle } = useTheme();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [location] = useLocation();

  const isHome = location === "/";

  // Track visible section on home page
  useEffect(() => {
    if (!isHome) return;
    const sections = [
      { id: "home", priority: 0 },
      { id: "about", priority: 0.5 },
      { id: "services", priority: 1 },
      { id: "career", priority: 2 },
      { id: "contact", priority: 3 },
    ];
    const intersecting = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.set(entry.target.id, entry.intersectionRatio);
          } else {
            intersecting.delete(entry.target.id);
          }
        });
        if (intersecting.size > 0) {
          let best = null;
          let bestRatio = 0;
          let bestPriority = Infinity;
          intersecting.forEach((ratio, id) => {
            const p = sections.find((s) => s.id === id)?.priority ?? Infinity;
            if (p < bestPriority || (p === bestPriority && ratio > bestRatio)) {
              best = id;
              bestRatio = ratio;
              bestPriority = p;
            }
          });
          if (best) setActiveSection(best);
        }
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: "-100px 0px 0px 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (name) => {
    if (name === "Home" && location === "/") return activeSection === "home" || activeSection === "";
    if (name === "About" && isHome && activeSection === "about") return true;
    if (name === "Services" && isHome && activeSection === "services") return true;
    if (name === "Career" && isHome && activeSection === "career") return true;
    if (name === "Contact" && isHome && activeSection === "contact") return true;
    return false;
  };

  const navigateTo = useCallback((e, href) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Use wouter SPA navigation instead of full page reload
      if (href.includes("#")) {
        const [path] = href.split("#");
        setLocation(path);
        // Small delay to let the route render before scrolling
        setTimeout(() => {
          const id = href.split("#")[1];
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        setLocation(href);
      }
    }
    setMobileOpen(false);
  }, [setLocation]);

  // Always use solid background - never transparent
  const navBg = "var(--bg)";

  // Always use themed text color
  const textColor = "var(--text)";

  const links = [
    { name: "Home", href: isHome ? "#home" : "/" },
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Services", href: isHome ? "#services" : "/#services" },
    { name: "Career", href: isHome ? "#career" : "/#career" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  const effectiveNavBg = navBg;
  const effectiveTextColor = textColor;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: effectiveNavBg,
        borderBottom: (scrolled || mobileOpen) ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        "--nav-text-color": effectiveTextColor,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => { if (location === "/") window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Logo className="w-20 h-20 md:w-28 md:h-28 text-accent group-hover:scale-105 transition-transform" dark={dark} />
          <div className="flex flex-col leading-tight">
            <span className="text-base md:text-lg font-bold tracking-wide" style={{ color: "#092a5c" }}>
              SaiRag
            </span>
            <span className="text-sm md:text-base font-bold tracking-[0.08em]" style={{ color: "#092a5c" }}>
              Engineering LLP
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => navigateTo(e, l.href)}
                className={`nav-link text-base md:text-lg font-semibold relative pb-1 transition-colors ${
                  isActive(l.name) ? "text-accent" : ""
                }`}
                style={isActive(l.name) ? { color: "var(--accent)" } : {}}
              >
                {l.name}
                {isActive(l.name) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                )}
              </a>
            ) : (
              <a
                key={l.name}
                href={l.href}
                className={`nav-link text-base md:text-lg font-semibold relative pb-1 transition-colors ${
                  isActive(l.name) ? "text-accent" : ""
                }`}
                style={isActive(l.name) ? { color: "var(--accent)" } : {}}
                onClick={(e) => navigateTo(e, l.href)}
              >
                {l.name}
                {isActive(l.name) && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                )}
              </a>
            )
          )}
          <button
            onClick={toggle}
            className="nav-link p-2 rounded-lg"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 transition-colors"
            style={{ color: effectiveTextColor }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            style={{ color: effectiveTextColor }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t max-h-[calc(100vh-5rem)] overflow-y-auto"
          style={{
            backgroundColor: "var(--bg)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) =>
              l.href.startsWith("/") ? (
                <Link
                  key={l.name}
                  href={l.href}
                  className={`py-3 text-lg font-semibold transition-colors ${
                    isActive(l.name) ? "text-accent" : ""
                  }`}
                  style={isActive(l.name) ? { color: "var(--accent)" } : { color: "var(--text)" }}
                  onClick={() => { window.scrollTo(0, 0); setMobileOpen(false); }}
                >
                  {l.name}
                </Link>
              ) : (
                <a
                  key={l.name}
                  href={l.href}
                  className={`py-3 text-lg font-semibold transition-colors ${
                    isActive(l.name) ? "text-accent" : ""
                  }`}
                  style={isActive(l.name) ? { color: "var(--accent)" } : { color: "var(--text)" }}
                  onClick={(e) => { navigateTo(e, l.href); setMobileOpen(false); }}
                >
                  {l.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}