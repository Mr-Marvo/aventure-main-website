import Hero from "./sections/Hero";
import ServicesSection from "./sections/ServicesSection";
import Slider from "./sections/Slider";
import VideoSection from "./sections/VideoSection";
import Vision from "./sections/Vision";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <ServicesSection />
      <Slider />
      <Vision />
    </div>
  );
}
