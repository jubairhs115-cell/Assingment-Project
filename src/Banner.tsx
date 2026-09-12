import PIC2 from "./assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mt-6">
      
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <h1 className="text-[60px] font-extrabold">
          Build Your Ideal
        </h1>

        <h1 className="text-[60px] bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent font-extrabold">
  Development Stack
</h1>
        <p className="mt-4 text-gray-600">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="flex gap-4 mt-6 text-[14px]">
          <button className="h-[42px] w-[170px] bg-linear-to-r from-[#F97316] to-[#EC4899] text-white rounded-[8px] font-semibold">
            Explore Technologies
          </button>

          <button className="h-[42px] w-[170px] border border-gray-500 rounded-[8px] font-normal">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="fle justify-center items-center">
        <img
          src={PIC2}
          alt="Development stack"
          className="w-full max-w-[500px] h-auto h-[320px] w-[350px]"
        />
      </div>

    </div>
  );
};

export default Banner;