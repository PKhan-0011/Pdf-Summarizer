"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import { useState, useEffect } from "react";

const HeroSection = () => {
  // const words = ["concise", "creative", "modern", "powerful"];
  // const [index, setIndex] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % words.length);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // ek aur chiz dhyan rakhio like ki hamm iska use isliye bhi karte hai taki side effcet p ye dikh jaye okkh!..
  // useEffect, and ye hamm generally api call, dom maniipulation, localStorage setInterval yha p hamm useEffcet hi use karte ahi okkh!>.

  return (
    <section>
      <div className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:py-28 transition-all animate-in lg:px-12 max-w-7xl mt-6">
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
          Transform PDFs into{" "}
          <span className="bg-red-200 rounded-xl p-1 ml-4 px-2 space-x-4 shadow-xl ">
            consice
          </span>{" "}
          summaries
        </h1>
        <h2 className="text-2xl text-gray-500 font-bold tracking-normal">
          Get a beautiful summary reel of the document in seconds.
        </h2>
        <div className="mt-8">
          <Button className="p-6 py-7  bg-neutral-200  font-bold rounded-full bg-linear-to-r from-black via-[#3b0000] to-red-600 duration-200 shadow-xl">
            <Link href={"/#pricing"} className="flex gap-4 items-center px-6">
              <span className="text-xl font-semibold text-white">
                Try Sommaire
              </span>
              <ArrowRight className="text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Consise jo hai uski jagah mughe like accertinity m nahi hai jo to and fro karta rhta hai aa jata rhta hai waisa kuch banana hai okkh!..
// and mughe abhi isme framer motion bhar bhar k lagana hai to stay tune..
// Yha p concise jo hai uski jagah mugeh like 3-4 alag alag chize chalani hai jaise outlines, Abstract, Outlines,
