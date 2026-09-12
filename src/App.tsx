 import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import Nav from "./Nav";
import Banner from "./Banner";
import Card from "./Card";

import type { Technology } from "./Type";
import Footer from "./Footer";

const technologyFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/public/technologies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data = await res.json();

  return data;
};

const technologyPromise = technologyFetch();

function App() {
  return (
    <>
      <Toaster position="top-right" />


      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-pink-400">Loading...</p>
          </div>
        }
      >
        
      <Nav />
      <Banner />
        <Card technologyPromise={technologyPromise} />
        <Footer/>
      </Suspense>
    </>
  );
}

export default App;