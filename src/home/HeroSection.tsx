import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:py-28 transition-all animate-in lg:px-12 max-w-7xl">
        <div className="flex">
          <div className=" relative p-1 overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant={"secondary"}
              className="relative px-8 py-2 text-base font-meduim bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200 "
            >
              <Sparkles
                className="h-8 w-6 mr-2 text-rose-600  animate-pulse"
                height={20}
              />
              <p className="text-2xl text-rose-600">Powered By Ai</p>
            </Badge>
          </div>
        </div>

        <h1 className="font-extrabold text-3xl py-6 text-center max-w-md ">
          Transform PDFs into concise summaries
        </h1>
        <h2 className="">
          Get a beautiful summary reel of the document in seconds.
        </h2>
        <Button className="">
          <Link href={"/#pricing"} className="flex gap-2 items-center">
            <span>Try Sommaire</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
