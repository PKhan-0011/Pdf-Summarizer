import React from "react";
import { Pizza } from "lucide-react";

const HeroSection02 = () => {
  return (
    <div className="flex-col container mx-auto flex items-center justify-center">
      <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100 backdrop-blur-xs border border-gray-500/20 mb-2">
        <Pizza className="h-10 w-10 text-rose-600 " />{" "}
        {/* Bhai dekh yha p pizza ki jagah bhut sari chize tughe apne according set karni hai okkh! like pdf ya 2-3 etc etc.. */}
      </div>

      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-normal">
          Watch How Sommarie transforms{" "}
          <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
            this Next.js course PDF
          </span>{" "}
          into an easy-to-read <span className="pl-60">summary!</span>
        </h1>
      </div>

      <div>
        <h1>
          Yha p like ek crousel lagega okkh!.. Todha tagda wala hai wmo okkh!..
        </h1>
      </div>
    </div>
  );
};

export default HeroSection02;
