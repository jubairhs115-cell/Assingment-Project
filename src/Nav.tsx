import { useState } from "react";
 

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">

     
      <div className="flex items-center justify-between">

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 flex-col justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-5 rounded bg-slate-700"></span>
          <span className="h-0.5 w-4 rounded bg-slate-700"></span>
          <span className="h-0.5 w-5 rounded bg-slate-700"></span>
        </button>

       
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white font-bold">
              DS
            </div>

            <h2 className="text-lg font-bold">
              Dev{" "}
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
          </div>
        
        <nav className="hidden md:block">
          <ul className="flex cursor-pointer gap-6 text-[14px]">

            <li className="font-semibold text-pink-600">
              Home
            </li>

            <li className="text-slate-500 transition hover:text-pink-600">
              Technologies
            </li>

            <li className="text-slate-500 transition hover:text-pink-600">
              Projects
            </li>

            <li className="text-slate-500 transition hover:text-pink-600">
              About
            </li>

            <li className="text-slate-500 transition hover:text-pink-600">
              Contact
            </li>

          </ul>
        </nav>

      
        <div className="flex items-center gap-2 sm:gap-4">

          <button className='cursor-pointer'>Sign In</button>

                <button className="btn btn-active btn-secondary border rounded-2xl font-semibold text-[14px]!">Sign Up</button>
        </div>
      </div>

       
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } mt-4 border-t border-slate-200 md:hidden`}
      >
        <ul className="flex flex-col">

          <li
            onClick={closeMenu}
            className="border-b border-slate-100 py-3 font-semibold text-pink-600"
          >
            Home
          </li>

          <li
            onClick={closeMenu}
            className="border-b border-slate-100 py-3 text-slate-600"
          >
            Technologies
          </li>

          <li
            onClick={closeMenu}
            className="border-b border-slate-100 py-3 text-slate-600"
          >
            Projects
          </li>

          <li
            onClick={closeMenu}
            className="border-b border-slate-100 py-3 text-slate-600"
          >
            About
          </li>

          <li
            onClick={closeMenu}
            className="py-3 text-slate-600"
          >
            Contact
          </li>

        </ul>
      </div>

    </header>
  );
};

export default Nav;