import React from "react";
import Link from "next/link";

const Headers = () => {
  return (
    <>
      <nav className="">
        <div>
          <Link href={"/path"}>Sommaire</Link>
        </div>
      </nav>
    </>
  );
};

export default Headers;
