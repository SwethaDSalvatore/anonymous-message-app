import React from "react";

const TRDHeroSection = () => {
  return (
    <section className="bg-yellow-500 h-screen flex items-center i justify-between px-20">
      <div className="flex flex-col items-start justify-center max-w-4xl  ">
        <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white text-center">
          Spin the Wheel of Wonders
        </h1>
        <p class="text-lg font-normal text-gray-700 lg:text-xl">
        Step into the realm of wild antics and revealing truths with Truth or Dare Edition. Get ready for endless fun as the games begin!
        </p>
        <button className="px-6 py-2 rounded-md text-sm font-bold mt-5 bg-white hover:bg-gray-200 text-gray-700">
          Rock and role !{" "}
        </button>
      </div>
      <img
        src="https://play-lh.googleusercontent.com/syL3jZH-_a5BCGxiKWHvhCqnCez5o7z1uawMWnoW_qSoOcegcEI77pEsOkYQmsm99Ms"
        alt="piegon-image"
        className="max-w-md"
      />
    </section>
  );
};

export default TRDHeroSection;
