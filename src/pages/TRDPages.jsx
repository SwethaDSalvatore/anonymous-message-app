import React from "react";
import TRDHeader from "../components/TRDHeader";
import TRDHeroSection from "../components/TRDHeroSection";

const TRDpage = () => {
  return (
    <>
      <TRDHeader />
      <TRDHeroSection />
      <div className="max-w-6xl m-10">
        <h1 className="text-2xl text-center font-custom text-gray-900">Truth or Dare..!</h1>
        <section className="max-w-6xl m-10 space-y-4">
          <select
            id="countries"
            class="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5 "
          >
            <option selected>Choose a option</option>
            <option value="truth">Truth</option>
            <option value="dare">Dare</option>
          </select>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          ></textarea>
          <button className="px-6 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg mt-4 shadow font-semibold">
            Send
          </button>
        </section>
        <section className="max-w-6xl m-10">
          <blockquote className="p-4 my-4 border-s-4 border-gray-400 bg-gray-100 rounded space-y-4">
            <h1 className="italic font-semibold leading-relaxed text-gray-900">Truth</h1>
            <p className="italic font-medium leading-relaxed text-gray-700">
              Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.
            </p>
          </blockquote>
        </section>
      </div>
    </>
  );
};

export default TRDpage;
