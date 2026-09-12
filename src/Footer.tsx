 const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">

      
      <div className="mx-auto hidden max-w-[1180px] md:block">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">

         
          <div className="col-span-2 md:col-span-1">

            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 font-bold text-white text-[16px]">
                DS
              </div>

              <h2 className="text-[18px] font-bold">
                Dev{" "}
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                  Stack
                </span>
              </h2>
            </a>

            <p className="mt-4 max-w-[280px] text-[12px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-[12px] font-semibold text-slate-600 hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[12px] font-semibold text-slate-600 hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[12px] font-semibold text-slate-600 hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>

          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-bold tracking-wide text-slate-700">
              PRODUCT
            </h4>

            <a
              href="#"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Projects
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-bold tracking-wide text-slate-700">
              COMPANY
            </h4>

            <a
              href="#about"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Contact
            </a>

            <a
              href="#"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Careers
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-bold tracking-wide text-slate-700">
              LEGAL
            </h4>

            <a
              href="#"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[12px] text-slate-400 hover:text-slate-700"
            >
              Terms of Service
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5 text-[12px] font-normal text-slate-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 text-[12px]">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>

        </div>

      </div>

       
      <div className="mx-auto max-w-md text-center md:hidden">

          <div className="flex justify-center items-center gap-2">
  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 font-bold text-white text-[16px]">
    DS
  </div>

  <h2 className="text-[18px] font-bold">
    Dev{" "}
    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
      Stack
    </span>
  </h2>
</div>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 text-[12px]">
          Curated tools, technologies, and resources for developers<br/>
          building modern software.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600 text-[12px]">

          <a href="#" className="hover:text-gray-900 ">
            GitHub
          </a>

          <span>•</span>

          <a href="#" className="hover:text-gray-900 ">
            Twitter
          </a>

          <span>•</span>

          <a href="#" className="hover:text-gray-900">
            LinkedIn
          </a>

        </div>

        {/* Line */}
        <div className="my-8 h-px w-full bg-gray-300"></div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-3 text-[11px]">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;