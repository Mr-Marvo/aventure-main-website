import Image from "next/image";

const GoalSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/background-2.png"
          alt="Tech Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row md:justify-between items-center py-10 md:py-0">
        {/* Left Side: Main Heading */}
        <div className="w-full md:w-1/2 text-white px-4 sm:px-8 md:px-12 xl:px-20">
          <h1 className="text-3xl sm:text-3xl font-semibold md:text-4xl lg:text-[50px] xl:text-[60px] leading-tight">
            Empowering <br /> you with the <br />
            <span className="font-semibold">resources and </span> <br />
            support to <br />
            <span className="font-semibold">
              achieve your <br /> goals.
            </span>
          </h1>
        </div>

        {/* Right Side: Description */}
        <div className="w-full md:w-1/2 text-white mt-8 md:mt-0 text-sm md:text-base lg:text-lg xl:text-xl px-4 sm:px-8 md:px-8 lg:px-10 xl:px-20 leading-relaxed">
          <p>
            At our software service company, we specialize in crafting
            international-standard enterprise-level applications that drive
            success. Harnessing the power of cutting-edge technologies and
            artificial intelligence, we deliver robust solutions designed to
            meet the ever-changing demands of your business.
          </p>
          <br />
          <p className="text-gray-400">
            Our consultancy-level outsourcing combines expert guidance with
            innovative strategies, empowering your technology initiatives to
            thrive. With our flexible rates and a dynamic, accessible team, we
            seamlessly align with your project needs, ensuring rapid delivery
            and exceptional quality. Partner with us to transform your vision
            into reality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
