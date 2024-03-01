import React from "react";

const Form = () => {
  return (
    <div className="bg-darkPrimary h-screen p-10">

    <form action="" className="bg-darkSecondary bg-opacity-10 shadow-2xl max-w-3xl mx-auto p-10 ">
        <h1 className="text-lightSecondary font-black text-2xl mb-5 text-center">Write a Note</h1>
    <textarea
           id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Write your thoughts here..."
          ></textarea>
          <button className="px-6 py-2 hover:text-darkSecondary rounded-lg mt-4 shadow font-semibold bg-lightPrimary w-full">
           Add Message
          </button>
    </form>
    <section className="max-w-6xl m-10 mx-auto">
           <blockquote class="p-4 my-4 border-s-4 border-gray-400 bg-gray-100 rounded">
             <p class="italic font-medium leading-relaxed text-gray-900 ">
              Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.
            </p>
         </blockquote>
        </section>
    </div>



  );
};

export default Form;
