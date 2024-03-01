import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-darkPrimary h-screen flex items-center i justify-between px-20">
      <div className="flex flex-col items-start justify-center max-w-4xl  ">
        <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white text-center">
          Speak Freely, Stay Anonymous
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Say what's on your mind without revealing who you are. Connect with
          your buddies through anonymous messages.
        </p>
        <button className="hover:bg-darkSecondary px-5 py-1 rounded-md text-sm font-bold mt-5 hover:text-darkPrimary bg-lightPrimary text-darkPrimary">Send Message </button>
      </div>
      <img src="https://papik.pro/en/uploads/posts/2023-12/1703133825_papik-pro-p-pochtovii-golub-s-pismom-risunki-44.png" alt="piegon-image"  className="max-w-md"/>
    </section>
  );
};

export default HeroSection;
