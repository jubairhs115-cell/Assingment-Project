 import PIC2 from "./assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">

      {/* Left Side */}
      <div className="flex flex-col justify-center text-center md:text-left">

        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-extrabold">
          Build Your Ideal
        </h1>

        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent font-extrabold">
          Development Stack
        </h1>

        <p className="mt-4 text-gray-600">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-[14px]">

          <button className="h-10.5 w-42.5 bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-[8px] font-semibold">
            Explore Technologies
          </button>

          <button className="h-10.5 w-42.5 border border-gray-500 Ig-px-8 font-normal rounded-[8px]">
            Learn More
          </button>

        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center">

        <img
          src={PIC2}
          alt="Development stack"
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto"
        />

      </div>

    </div>
  );
};

export default Banner;