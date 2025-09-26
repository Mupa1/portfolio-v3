import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const About = dynamic(() => import("@/components/sections/about"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Contact = dynamic(() => import("@/components/sections/contact"));
const Footer = dynamic(() => import("@/components/sections/footer"));

const HomePage = () => {
  return (
    <div className="body-padding-x h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
