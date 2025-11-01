import React from "react";
import BackgroundTest from "@/home/BackgroundTest";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const UploadPage = () => {
  const words = "PDF's";

  return (
    <section className="min-h-screen">
      <BackgroundTest />
      <div className="flex flex-col justify-center items-center mt-40 gap-8">
        {/*Bhai dekh yah p acatully na 3 div banenge ek div m okh!..*/}
        <div className="flex flex-col justify-center items-center gap-6">
          <Badge
            variant={"secondary"}
            className="relative z-10 flex items-center justify-center  px-8 py-2 text-base font-meduim bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200 border-2 border-rose-500"
          >
            <Sparkles className="h-14 w-14 mr-2 text-rose-600  animate-pulse" />
            <p className="text-2xl text-rose-600">
              Ai Powered Content Creation
            </p>
          </Badge>

          <div className="flex flex-col gap-8 items-center justify-center mt-6">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Start Uplaoding Your <span>{words}</span>
            </h2>

            <p className="flex items-center gap-3 text-xl lg:text-2xl text-gray-400 font-semibold text-center pl-4">
              Uplaod your PDF add let our AI do the magic!{" "}
              <Sparkles className="text-amber-300" />
            </p>

            <h1 className="text-center font-bold text-gray-400">Uplaod Page</h1>
          </div>
        </div>

        {/*Ye jo hai wo actaully mughe isme do chize chiaye okkh like first wlaa jo hai wo input chaiye and another wala jo hai  */}

        <div className="flex gap-2 flex-col md:flex-row lg:flex-row">
          <input
            type="text"
            placeholder="Choose file from your folder"
            className="border rounded p-3 text-sm  w-xl"
          />
          <button className="text-white font-bold bg-linear-to-r from-rose-800 via-rose-600 to-rose-500 rounded-xl p-3 px-6 shadow-lg">
            Upload your PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadPage;
