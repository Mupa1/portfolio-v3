import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const About = dynamic(() => import("@/components/sections/about"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const Education = dynamic(() => import("@/components/sections/education"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Contact = dynamic(() => import("@/components/sections/contact"));
const Footer = dynamic(() => import("@/components/sections/footer"));

const HomePage = () => {
  return (
    <div className="body-padding-x no-horizontal-scroll">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
