import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import EducationSection from "@/components/Education";
import Vinyl from "@/components/Vinyl";
import Photography from "@/components/Photography";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <SectionDivider label="Work" />
        <Projects />
        <SectionDivider label="Experience" />
        <Experience />
        <SectionDivider label="Recognition" />
        <Achievements />
        <SectionDivider label="About" />
        <About />
        <SectionDivider label="Education" />
        <EducationSection />
        <SectionDivider label="On Rotation" />
        <Vinyl />
        <SectionDivider label="Photography" />
        <Photography />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
