import React from "react";
import dLocal from "@/assets/company/dlocal.svg";
import food from "@/assets/company/food-court.svg";
import fair from "@/assets/company/fairmoney.svg";
import interSwitch from "@/assets/company/interswitch.svg";
import umba from "@/assets/company/umba.svg";
import paga from "@/assets/company/paga.svg";
import Image from "next/image";

const TrustedBy = () => {
  const company = [
    { image: dLocal },
    { image: food },
    { image: fair },
    { image: interSwitch },
    { image: umba },
    { image: paga },
  ];

  return (
    <section className="max-w-[1250px] mx-auto px-10 flex w-full items-center py-10">
      <div>
        <h1 className="text-gray-600 text-sm pb-4">Trusted by:</h1>
        <div className="h-full w-full flex gap-x-10">
          {company?.map((d, index) => (
            <Image src={d?.image} width={150} alt="" key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
