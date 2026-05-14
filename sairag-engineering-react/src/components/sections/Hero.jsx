import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import local background images from assest folder
import bg1 from "../../assest/11.jpeg";
import bg2 from "../../assest/22.jpeg";

// Import icons
import facadeIcon from "../../assest/frame.png";
import mechIcon from "../../assest/system.png";

const heroImages = [bg1, bg2];

// Pre-calculate static styles
const overlayStyle = {
  background:
    "linear-gradient(135deg, rgba(46, 57, 71, 0.9) 0%, rgba(0, 0, 0, 0) 50%, rgba(0,0,0,0.15) 100%)",
};

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change every 6 seconds (was 5)
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-start justify-start overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex items-start justify-start pt-32 pl-12 md:pl-16 lg:pl-20">
        <div className="flex flex-col items-start justify-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl lg:max-w-4xl"
          >
            <p className="text-xl md:text-3xl leading-relaxed text-white/80 font-medium whitespace-nowrap">
              Advanced Façade Engineering & Mechanical Design Solutions.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}