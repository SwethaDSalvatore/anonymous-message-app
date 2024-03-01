import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../firebase/index";
import { setDoc, doc, addDoc,collection,getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const { register, handleSubmit,reset } = useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "messages"));
      setData(querySnapshot.docs);
    }
    getData();
  }, []);
 console.log(data)

  const formSubmit = async (data) => {
    console.log(data);
    const docRef = await addDoc(collection(db, "messages"), data);
    
    reset();
    navigate("/sendmessage")
  };

  

  return (
    <div className="bg-darkPrimary  p-10">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="bg-darkSecondary bg-opacity-10 shadow-2xl max-w-3xl mx-auto p-10 "
      >
        <h1 className="text-lightSecondary font-black text-2xl mb-5 text-center">
          Write a Note
        </h1>
        <textarea
          id="message"
          name="message"
          {...register("message")}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button className="px-6 py-2 hover:text-darkSecondary rounded-lg mt-4 shadow font-semibold bg-lightPrimary w-full">
          Add Message
        </button>
      </form>

      {data.map((data,index)=>{
      
        return (
           <section className="max-w-6xl m-5 mx-auto">
           <blockquote class="p-4 my-4 border-s-4 border-gray-400 bg-gray-100 rounded">
            <p class="italic font-medium leading-relaxed text-gray-900 ">
          {data.data().message}
            </p>
          </blockquote>
         </section>
        )
      })}
     
    </div>
  );
};

export default Form;
