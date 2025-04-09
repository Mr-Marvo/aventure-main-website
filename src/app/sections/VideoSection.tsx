const VideoSection = ({ id }: { id: string }) => {
  return (
    <section className="w-full h-screen flex bg-cover overflow-hidden relative"
    id={id}
>
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/40 to-black/80 backdrop-blur-2xl"></div>

      {/* Video Section */}
      <div className="relative z-10 w-full h-full">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default VideoSection;
