import { ImSpinner2 } from "react-icons/im";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import DrugReview from "../components/Analysis/DrugReview";
import Introduction from "../components/Analysis/Introduction";
import Recommendation from "../components/Analysis/Recommendation";
import OtherAnalysis from "../components/Analysis/Others";

export default function Analysis() {
  const [loading, setLoading] = useState(false);
  const [cultureSent, setCultureSent] = useState(false);

  const notify = (message: String) => toast.error(message);

 

  return (
    <div className="bg-secondary h-screen w-full relative p-2">
      <div className="fixed z-50 top-10">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="">
      <div className="max-w-7xl mx-auto mt-3">
          <Link href={"/"} className="w-min">
            <button className="bg-gray-500/80 backdrop-blur-md text-white px-3 py-2 rounded-md">
              {"< "}
              Back
            </button>
          </Link>
          </div>
        <form className="w-full">
          
          <Introduction/>

          <DrugReview/>

          <Recommendation/>

          <OtherAnalysis/>

          {/* Submit */}
          <div className="flex justify-end max-w-6xl mx-auto">
            {!loading ? (
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-white rounded-md text-lg font-medium my-5"
                onClick={()=>notify("Form Not implemented")}
              >
                Submit
              </button>
            ) : (
              <div className="bg-slate-400/50 px-6 mt-3 ">
                <ImSpinner2
                  className="animate-spin my-3 fill-primary "
                  size={30}
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
