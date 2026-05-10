import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Logo } from "../ui/Logo";
import { useTheme } from "../../context/ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [location] = useLocation();

  const isHome = location === "/";

  // Transparent only on home page hero (not scrolled). Solid background everywhere else.
  const atHero = isHome && !scrolled;
  const navBg = atHero
    ? "transparent"
    : "var(--bg)";

  // White text only on home hero (visible against dark overlay), themed text elsewhere
  const textColor = atHero
    ? "#ffffff"
    : "var(--text)";

  const links = [
    { name: "Home", href: isHome ? "#home" : "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: isHome ? "#services" : "/#services" },
    { name: "Career", href: isHome ? "#career" : "/#career" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBg,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent",
        // Only apply blur when scrolled to save GPU resources
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        "--nav-text-color": textColor,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="w-20 h-20 md:w-28 md:h-28 text-accent group-hover:scale-105 transition-transform" dark={dark} />
          <div className="flex flex-col leading-tight">
            <span className="text-base md:text-lg font-light tracking-wide" style={{ color: "var(--nav-text-color)" }}>
              SaiRag
            </span>
            <span className="text-xs md:text-sm font-light tracking-[0.08em] opacity-50" style={{ color: "var(--nav-text-color)" }}>
              Engineering LLP
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.name}
                href={l.href}
                className="nav-link text-base md:text-lg font-semibold"
              >
                {l.name}
              </Link>
            ) : (
              <a
                key={l.name}
                href={l.href}
                className="nav-link text-base md:text-lg font-semibold"
              >
                {l.name}
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
            style={{ color: textColor }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            style={{ color: textColor }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

          {mobileOpen && (
        <div
          className="md:hidden border-t"
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
                  className="py-3 text-lg font-semibold transition-colors"
                  style={{ color: textColor }}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.name}
                </Link>
              ) : (
                <a
                  key={l.name}
                  href={l.href}
                  className="py-3 text-lg font-semibold transition-colors"
                  style={{ color: textColor }}
                  onClick={() => setMobileOpen(false)}
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