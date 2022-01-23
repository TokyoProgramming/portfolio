import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative 
    h-96 lg:h-[45rem] w-[100]"
    >
      <Image
        src="/images/hero/star.jpg"
        layout="fill"
        objectFit="cover"
        alt="logo"
        className="opacity-90"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-white text-3xl lg:text-6xl font-extrabold whitespace-nowrap">
          Welcome to My Website
        </h2>
        <br />

        <h1 className="text-cyan-400 text-4xl lg:text-6xl font-extrabold mt-5 whitespace-nowrap">
          Web Developer
        </h1>
      </div>
    </div>
  );
}
