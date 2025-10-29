import React from "react";
import { BrainCircuit } from "lucide-react";
import { FileOutputIcon } from "lucide-react";
import { FileText } from "lucide-react";

const HowToWorkSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 flex flex-col space-y-24">
        {/* ye wala div jo hai wo heading and summary k liye hai...*/}
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent font-bold text-2xl">
            HOW IT WORKS
          </h1>
          <h2 className="text-4xl ml-6 max-w-2xl font-bold text-gray-900 ">
            Transform any pdf into an easy-to-digest{" "}
            <span className=" pl-10 ml-10">
              {" "}
              summary in three simplest steps
            </span>
          </h2>
        </div>

        <div className="flex flex-col space-y-24 justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <FileText
              height={60}
              width={60}
              className="bg-rose-100 p-2 rounded-xl border border-gray-300 text-rose-600"
            />
            <h1 className="text-2xl font-bold tracking-tight">Upload PDF</h1>
            <p className="text-xl text-gray-400 pl-4">
              simply drag and drop your PDF document or click to upload{" "}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <BrainCircuit
              height={60}
              width={60}
              className="bg-rose-100 p-2 rounded-xl border border-gray-300 text-rose-600"
            />
            <h1 className="text-2xl font-bold tracking-tight">Ai Analysis</h1>
            <p className="text-xl text-gray-400 pl-6">
              Our advanced Ai process and analysis your document instantly.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            {/*Image*/}
            <FileOutputIcon
              height={60}
              width={60}
              className="bg-rose-100 p-2 rounded-xl border border-gray-300 text-rose-600"
            />
            <h1 className="text-2xl font-bold tracking-tight">Get Summary</h1>
            <p className="text-xl text-gray-400 pl-6">
              Receive a clean, consise summary of your document
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWorkSection;
