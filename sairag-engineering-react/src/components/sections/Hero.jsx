import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Import local background images from assest folder
import bg1 from "../../assest/aleksandrs-zeltisevs-O-vNkUIFgtA-unsplash.jpg";
import bg2 from "../../assest/chris-hunter-JtyoQYtPdsU-unsplash.jpg";
import bg3 from "../../assest/declan-sun-ltpDzIWKYR8-unsplash.jpg";
import bg4 from "../../assest/samuel-pagel-h7ABHB1X4s8-unsplash.jpg";

// Import icons
import facadeIcon from "../../assest/frame.png";
import mechIcon from "../../assest/system.png";

const heroImages = [bg1, bg2, bg3, bg4];

// Pre-calculate static styles
const overlayStyle = {
  background:
    "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)",
};

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change every 6 seconds (was 5)
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background carousel with crossfade */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            loading="eager"
            // Use will-change on the active image only
            onLoad={(e) => { e.target.style.willChange = "opacity"; }}
          />
        </AnimatePresence>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={overlayStyle} />

      {/* Blueprint grid overlay - using CSS mask for better perf */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(var(--accent) 1px, transparent 1px),
          linear-gradient(90deg, var(--accent) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Carousel navigation dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-accent w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-accent" />
              <span className="text-[10px] tracking-[0.15em] uppercase text-accent">
                Precision Driven
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6 text-white">
              SaiRag<br />
              <span className="text-white/60">Engineering LLP</span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8 text-white/70">
              Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven design, detailing, CAD/BIM, and mechanical engineering support for global projects.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium rounded-lg transition-all bg-accent text-white hover:brightness-110 shadow-lg shadow-accent-rgb/20"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Side Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col w-80"
          >
            {/* Façade Link */}
            <a 
              href="#services" 
              className="group flex items-center justify-between py-6 text-white/60 hover:text-white transition-all duration-300 border-b border-white/10"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <img 
                    src={facadeIcon} 
                    alt="Façade" 
                    className="w-6 h-6 object-contain invert opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                    loading="lazy"
                  />
                </div>
                <span className="text-sm tracking-[0.2em] uppercase font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Façade Engineering
                </span>
              </div>
              <ChevronRight 
                size={32} 
                strokeWidth={1} 
                className="text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500" 
              />
            </a>

            {/* Mechanical Link */}
            <a 
              href="#services" 
              className="group flex items-center justify-between py-6 text-white/60 hover:text-white transition-all duration-300 border-b border-white/10"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <img 
                    src={mechIcon} 
                    alt="Mechanical" 
                    className="w-6 h-6 object-contain invert opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                    loading="lazy"
                  />
                </div>
                <span className="text-sm tracking-[0.2em] uppercase font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Mechanical Design
                </span>
              </div>
              <ChevronRight 
                size={32} 
                strokeWidth={1} 
                className="text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500" 
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-4"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="w-full h-full">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}