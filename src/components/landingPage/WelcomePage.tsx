import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import Image from "next/image";
import Image1 from "@/assets/homepage-hero-left1.svg";
import Image2 from "@/assets/homepage-hero-left2.svg";

const WelcomePage = () => {
  return (
    <section className="flex w-full items-center">
      <div className="w-[45%] text-gray-600 space-y-4">
        <h1 className="font-medium text-5xl">
          The fastest way to access financial data.
        </h1>
        <p className="text-lg">
          Access financial information from banks and more—with one API—to build
          financial products.
        </p>
        <PrimaryBtn label="Contact Sales" type="submit" />
      </div>
      <div className="flex-1 w-full relative items-end justify-end flex">
        <Image src={Image1} width={550} alt="" />
        <Image
          src={Image2}
          width={200}
          alt=""
          className="absolute bottom-0 left-14"
        />
      </div>
    </section>
  );
};

export default WelcomePage;
