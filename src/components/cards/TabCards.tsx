import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import Image from "next/image";
import Image1 from "@/assets/exploreImages/identity1.svg";
import Image2 from "@/assets/exploreImages/identity2.svg";

interface dataType {
  currentTab: string;
  title: string;
  descrition: string;
  company: string[];
  color: string;
  mainImg: string;
}

const TabCards: React.FC<dataType> = ({
  currentTab,
  title,
  descrition,
  company,
  color,
  mainImg,
}) => {
  return (
    <section className="pt-6 px-10">
      <div className="flex flex-col space-y-4">
        <h3 className="font-semibold text-xl text-gray-600">{currentTab}</h3>
        <h1 className="font-medium text-3xl">{title}</h1>
        <p className="text-base">{descrition}</p>
        <PrimaryBtn label="Learn more" type="submit" />
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <p className="text-base">{`Companies building with ${currentTab}`}</p>
        <div className="flex gap-x-2.5">
          {company?.map((d, index) => (
            <Image src={d} width={100} height={10} alt="" key={index} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col relative h-60">
        <div className="flex-1">
          <div className="mx-auto absolute top-0 left-10">
            <Image src={mainImg || Image1} width={650} height={10} alt="" />
          </div>
        </div>
        <div
          className={`h-24  w-full rounded-b-md`}
          style={{ background: color }}
        >
          <Image src={Image2} width={500} height={10} alt="" className="text" />
        </div>
      </div>
    </section>
  );
};

export default TabCards;
