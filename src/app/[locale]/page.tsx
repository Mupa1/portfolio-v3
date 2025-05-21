import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const About = dynamic(() => import("@/components/sections/about"));
const Projects = dynamic(() => import("@/components/sections/projects"));

const HomePage = () => {
  return (
    <div className="body-padding-x h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <About />
      <Projects />
      <div id="contact" className="center-snap">
        Contact
      </div>
    </div>
  );
};

export default HomePage;
