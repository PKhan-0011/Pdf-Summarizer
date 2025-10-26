import React from "react";
import Link from "next/link";

import Image from "next/image";

const Headers = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-2 py-4 lg:px-8 ">
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src="/file-text.png"
              alt="File-Text"
              width={20}
              height={30}
              className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition-all duration-300 ease-in-out"
            />
            <h1 className="font-extrabold lg:text-xl text-gray-900">
              Sapphire
            </h1>
          </Link>
        </div>

        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
          <Link href={"/#pricing"}>Pricing</Link>
          <Link href={"/dashboard"}>Your Sumaries</Link>
        </div>

        <div className="flex lg:justify-end ">
          <Link href={"/sign-in"}>Sign In</Link>
        </div>
      </nav>
    </>
  );
};

export default Headers;
