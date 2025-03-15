import Hero from "./sections/Hero";
import ServicesSection from "./sections/ServicesSection";
import VideoSection from "./sections/VideoSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <ServicesSection />
    </div>
  );
}
