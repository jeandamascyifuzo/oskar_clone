"use client";
import { buildData } from "@/assets/data/Dummy";
import React from "react";

const BuildEasier = () => {
  return (
    <div>
      <h1 className="font-extrabold text-6xl text-center pb-10 animated-gradient-text">
        Build. Easier. Faster
      </h1>

      <style jsx>{`
        .animated-gradient-text {
          background: linear-gradient(90deg, #c0fc72, #2aad86);
          background-size: 200%;
          background-position: 0%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideGradient 6s linear infinite;
        }

        @keyframes slideGradient {
          0% {
            background-position: 200%;
          }
          100% {
            background-position: 100%;
          }
        }
      `}</style>
      <hr className="text-gray-50" />
      <ul className="text-white grid grid-cols-4 py-10">
        {buildData?.map((el: buildDataType) => (
          <li key={el?.id} className="flex flex-col items-center space-y-0.5">
            <h1 className="font-extrabold text-3xl">{el?.percentage}</h1>
            <p className="text-gray-300">{el?.name}</p>
          </li>
        ))}
      </ul>
      <hr className="text-gray-50" />
    </div>
  );
};

export default BuildEasier;
