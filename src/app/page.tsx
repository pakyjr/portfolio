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
import MusicPlayer from "@/components/MusicPlayer";
import { shuffle } from "@/helpers/shuffle";
import { tracks } from "@/lib/tracks";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Nav />
        <main>
          <Hero />
          <SectionDivider number="01" label="Work" />
          <Projects />
          <SectionDivider number="02" label="Experience" />
          <Experience />
          <SectionDivider number="03" label="Recognition" />
          <Achievements />
          <SectionDivider number="04" label="About" />
          <About />
          <SectionDivider number="05" label="Education" />
          <EducationSection />
          <SectionDivider number="06" label="On Rotation" />
          <Vinyl />
          <SectionDivider number="07" label="Photography" />
          <Photography />
        </main>
        <Footer />
      </SmoothScroll>
      <div id="music-player" className="sticky bottom-0 z-50">
        <MusicPlayer tracks={shuffle(tracks)} />
      </div>
    </>
  );
}
