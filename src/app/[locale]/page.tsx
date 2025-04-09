import Hero from "@/components/hero";

export default function HomePage() {
  return (
    <div className="body-padding-x h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      <div id="about" className="h-screen snap-center snap-always">
        About
      </div>
      <div id="projects" className="h-screen snap-center snap-always">
        Projects
      </div>
      <div id="contact" className="h-screen snap-center snap-always">
        Contact
      </div>
    </div>
  );
}
