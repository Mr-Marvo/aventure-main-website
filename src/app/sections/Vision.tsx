import Image from "next/image";

const Vision = () => {
  return (
    <div className="flex flex-col p-4 sm:p-10 py-10 sm:py-20 min-h-screen">
      {/* Heading Section */}
      <div className="flex text-lg sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-normal pb-6 sm:pb-9 text-center sm:text-right">
        <h1>
          Deliver innovative technology solutions for businesses across various
          industries. Since 2022, we've been helping companies in finance,
          healthcare, retail, and more with custom software designed to meet
          their specific needs.
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 w-full">
        {/* Left Section (Text) */}
        <div className="flex w-full lg:w-1/2">
          <div className="bg-gray-100 p-6 sm:p-10 md:p-14 rounded-3xl flex flex-col pt-10 sm:pt-20 justify-center">
            <p className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-normal">
              Whether you're looking to revamp your digital presence or build a
              custom solution from the ground up,{" "}
              <span className="text-green-500 font-semibold">Aventure</span> is
              here to turn your vision into reality.
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-full lg:w-[650px] h-[300px] sm:h-[400px] lg:h-[450px]">
          <Image
            src="/Small-Card.png"
            alt="Tech Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
