import About from "@/components/about";
import Cards from "@/components/cards";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import { LayoutGridDemo } from "@/components/layoutgrid";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { ModeToggle } from "@/components/theme-switch";
import { BackgroundGradient } from "@/components/ui/gradientcard";
import { Spotlight } from "@/components/ui/spot";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam>
      <main className="flex flex-col items-center px-4 ">
        <Intro />
        <SectionDivider />
        <About />
        
        <Projects />
        <LayoutGridDemo/>
        <Cards></Cards>
        <Skills />
        <Experience />
        <Contact />
      </main>
    </TracingBeam>
  );
}
