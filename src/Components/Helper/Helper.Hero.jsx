import React from "react";

export default function Hero({ title, subtitle }) {
  return (
    <>
      <div className="h-[35vh] py-12  bg-blue-700 text-white">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center gap-4 ">
            <div className="text-3xl font-extrabold">{title}</div>
            <div className="text-xl font-extralight max-w-3xl">{subtitle}</div>
          </div>
        </div>
      </div>
    </>
  );
}
