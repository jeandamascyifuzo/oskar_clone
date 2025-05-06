"use client";

import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { motion } from "framer-motion";
import food from "@/assets/company/food-court.svg";
import Image from "next/image";

const OkraCoverage = () => {
  const images = [food, food, food, food, food, food, food, food];

  return (
    <div className="flex items-center justify-between">
      {/* Left Side */}
      <div className="gap-y-4 flex flex-col w-2/5">
        <h1 className="font-medium text-3xl">
          The largest API coverage across financial institutions in Africa
        </h1>
        <p>
          Get financial information from all banks and other financial
          institutions in Nigeria. Currently in beta for Kenya and South Africa.
        </p>
        <div>
          <PrimaryBtn label="View Coverage" type="submit" />
        </div>
      </div>

      {/* Floating Vertical Slide */}
      <div className="relative h-[32rem] w-1/2 overflow-hidden">
        <motion.div
          className="absolute top-full flex flex-col gap-6"
          animate={{ y: "-200%" }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="w-32 h-32">
              <Image
                src={img.src || img}
                width={64}
                height={64}
                alt={`image-${i + 1}`}
                className="rounded shadow-lg object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OkraCoverage;
