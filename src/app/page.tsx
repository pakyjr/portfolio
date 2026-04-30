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
import messages from "@/messages.json";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Nav />
        <main>
          <Hero />
          <SectionDivider label={messages.Projects.title} />
          <Projects />
          <SectionDivider label={messages.Experience.title} />
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
      <div className="sticky bottom-0 z-50">
        <MusicPlayer tracks={shuffle(tracks)} />
      </div>
    </>
  );
}
