import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Deliverables } from "../components/sections/Deliverables";
import { Career } from "../components/sections/Career";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Deliverables />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}