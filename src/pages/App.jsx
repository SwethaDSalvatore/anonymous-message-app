import React from "react";

const App = () => {
  return (
    <div>
      <div className="max-w-6xl m-10">
        <h1 className="text-2xl text-center font-custom">Write to Your Friend</h1>
        <section className="max-w-6xl m-10">
          {/* <label
            htmlFor="message" // Change "for" to "htmlFor" for proper JSX syntax
            className="block mb-2 text-sm font-medium text-black"
          >
            Write Your message below :
          </label> */}
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your thoughts here..."
          ></textarea>
          <button className="px-6 py-2 bg-white hover:bg-slate-200 rounded-lg mt-4 shadow font-semibold">
            Send
          </button>
        </section>
        <section className="max-w-6xl m-10">
          <blockquote class="p-4 my-4 border-s-4 border-gray-400 bg-gray-100 rounded">
            <p class="italic font-medium leading-relaxed text-gray-900 ">
              Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.
            </p>
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default App;
