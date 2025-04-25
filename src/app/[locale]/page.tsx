import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const About = dynamic(() => import("@/components/sections/about"));

export default function HomePage() {
  return (
    <div className="body-padding-x h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <About />
      <div id="projects" className="center-snap">
        Projects
      </div>
      <div id="contact" className="center-snap">
        Contact
      </div>
    </div>
  );
}
