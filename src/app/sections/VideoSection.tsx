import Image from "next/image";

const VideoSection = () => {
  return (
    <section className="w-full h-screen flex bg-cover overflow-hidden relative">
      {/* Background Blur Effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/40 to-black/80 backdrop-blur-2xl"></div> */}

      {/* Video Section */}
      <div className="relative z-10">
        <Image
          src="/video-section.png"
          width={1640}
          height={500}
          alt="Picture of the author"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;
