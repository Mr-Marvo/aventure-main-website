"use client";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Type for the slider data
type SliderData = {
  image: string; // Assuming images are URLs or paths to the images
  title: string;
  description: string;
};

// Slider Component
const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  // const [active, setActive] = useState<string | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -290, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 290, behavior: "smooth" });
    }
  };

  const sliderData: SliderData[] = [
    {
      image: "/Image Block.png", // Replace with the correct image path
      title: "Coastal Region",
      description:
        "Sri Lanka’s beautiful coastline with beaches, surfing spots, and harbours.",
    },
    {
      image: "/Image Block (1).png", // Replace with the correct image path
      title: "Hill Country",
      description:
        "Famous for its mountains, tea plantations, waterfalls, and cool climate.",
    },
    {
      image: "/Image Block (2).png", // Replace with the correct image path
      title: "Wildlife & Nature",
      description:
        "National parks, safaris, rainforests, and eco-tourism hotspots.",
    },
    {
      image: "/Image Block (3).png", // Replace with the correct image path
      title: "Northern Region",
      description: "Rich in Tamil culture, history, and remote beaches.",
    },
  ];

  return (
    <section className="h-screen bg-[#F0F0F0] p-4 md:p-20">
      <div className="flex flex-col justify-between w-full z-30 overflow-y-hidden">
        <div className="mb-7 md:mb-1">
          <h1 className="text-xl md:text-2xl">FEATURED PROJECTS</h1>
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-end w-full px-4 py-2 gap-3">
          <button
            onClick={scrollLeft}
            className="text-black p-2 rounded-full border border-black hover:bg-black hover:text-white transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="text-black p-2 rounded-full border border-black hover:bg-black hover:text-white transition-all"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slider Section */}
        <div ref={sliderRef} className="flex space-x-3 w-full overflow-hidden">
          {sliderData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col w-[280px] md:w-[400px] lg:w-[520px] flex-shrink-0 rounded-3xl overflow-hidden relative bg-white shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] md:h-[300px] lg:h-[330px] xl:h-[370px] object-cover"
              />
              <div className="p-2">
                <h2 className="text-xl md:text-2xl  font-extrabold">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
