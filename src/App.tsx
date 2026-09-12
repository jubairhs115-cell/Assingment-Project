import Nav from "./Nav";
import Banner from "./Banner";
import type { Technology } from "./Type";
import { Suspense } from "react";
import Card from "./Card";

const technologyFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/public/technologies.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies.json");
  }

  const data = await res.json();

  return data;
};

const technologyPromise = technologyFetch();

function App() {
  return (
    <>
      

      <Suspense fallback={<p>Loading....</p>}>
      <Nav />

      <Banner />
        <Card technologyPromise={technologyPromise} />
      </Suspense>
    </>
  );
}

export default App;