import { Suspense } from "react";

import Nav from "./Nav";
import Banner from "./Banner";
import Card from "./Card";

import type { Technology } from "./Type";

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
    

      <Suspense  fallback={
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-pink-400">Loading...</p>
    </div>
  }>
        <Nav />

      <Banner />
        <Card technologyPromise={technologyPromise} />
      </Suspense>
    </>
  );
}

export default App;