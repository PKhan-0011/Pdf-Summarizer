"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavLink from "@/common/nav-link";

const Headers = () => {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  return (
    <>
      <nav className="relative container mx-auto  flex items-center justify-between px-2 py-4 lg:px-8 mt-2 rounded-lg">
        <div className="flex items-center">
          <NavLink href={"/"} className="flex items-center gap-1">
            <Image
              src="/file-text.png"
              alt="File-Text"
              width={40}
              height={40}
              className="w-10 h-10 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition-all duration-300 ease-in-out"
            />
            <h1 className="font-extrabold text-2xl lg:text-xl text-gray-900">
              Sapphire
            </h1>
          </NavLink>
        </div>

        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
          <NavLink href={"/#pricing"}>
            <span className="text-xl px-4 font-semibold">Pricing</span>
          </NavLink>
          {isLoggedIn && <Link href={"/dashboard"}>Your Sumaries</Link>}
        </div>

        <div className="flex lg:justify-end ">
          {isLoggedIn && (
            <div className="flex gap-2 items-center ">
              <NavLink href="/upload">Upload a PDF</NavLink>
              <div>Pro</div>
              <Button>Sign Out</Button>
            </div>
          )}
          <div className="">
            <NavLink href={"/sign-in"}>
              <span className="text-xl px-6 font-semibold">Sign In </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;

// Yha p abhi todha sa like sign-In karte time p issue hai like kuch condition checking m issue aa rha hai okkh!...
// setIsLogged in tabi chlega like jab hamm sign-In kar chuke honge okkh!.. uske baad ooriginal wala logic lagega okkh!>..
