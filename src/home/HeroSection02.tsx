import React from "react";
import { Pizza } from "lucide-react";

const HeroSection02 = () => {
  return (
    <div className="flex-col container mx-auto flex items-center justify-center gap-6">
      <div>
        <Pizza className="h-20 w-20 text-rose-600 " />
      </div>

      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-normal">
          Watch How Sommarie transforms{" "}
          <span className="text-rose-600">this Next.js course PDF</span> into an
          easy-to-read <span className="pl-60">summary!</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection02;
