import Image from "next/image";
import React from "react";

export default function Batch({ src, height, width, alt }) {
  return (
    <div class="relative ml-3 cursor-pointer">
      <Image
        src={src}
        height={height}
        width={width}
        alt={alt}
        className="opacity-90"
      />
    </div>
  );
}
