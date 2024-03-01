import React, { useEffect, useState } from "react";
import TRDHeader from "../components/TRDHeader";
import TRDHeroSection from "../components/TRDHeroSection";
import { useForm } from "react-hook-form";
import { db } from "../firebase/index";
import { setDoc, doc, addDoc,collection,getDocs } from "firebase/firestore";

const TRDpage = () => {
  const { register, handleSubmit,reset } = useForm();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "truthordare"));
      setData(querySnapshot.docs);
    }
    getData();
  }, []);

  const formSubmit = async (data) => {
    console.log(data);
    const docRef = await addDoc(collection(db, "truthordare"), data);
    alert("Thank you for your response")
    reset();
    navigate("/sendmessage")
  };


  return (
    <>
      <TRDHeader />
      <TRDHeroSection />
      <div className="max-w-6xl m-10">
        <h1 className="text-2xl text-center font-custom text-gray-900">Truth or Dare..!</h1>
        <form className="max-w-6xl m-10 space-y-4" onSubmit={handleSubmit(formSubmit)}>
          <select
            id="option"
            name="option"
            {...register("option")}
            class="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2.5 "
          >
            <option selected>Choose a option</option>
            <option value="truth">Truth</option>
            <option value="dare">Dare</option>
          </select>
          <textarea
            id="message"
            name="message"
            {...register("message")}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
          ></textarea>
          <button className="px-6 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg mt-4 shadow font-semibold">
            Send
          </button>
        </form>
        {data.map((data,index)=>{
      
      return (
        <section className="max-w-6xl m-10">
        <blockquote className="p-4 my-4 border-s-4 border-gray-400 bg-gray-100 rounded space-y-4">
          <h1 className="italic font-semibold leading-relaxed text-gray-900">{data.data().option}</h1>
          <p className="italic font-medium leading-relaxed text-gray-700">
          {data.data().message}
          </p>
        </blockquote>
      </section>
      )
    })}
       
      </div>
    </>
  );
};

export default TRDpage;
