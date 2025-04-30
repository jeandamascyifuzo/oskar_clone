import React from "react";
import HowBusinessCard from "../cards/HowBusinessCard";
import { dataToMap } from "@/assets/data/Dummy";

const HowOkraPower = () => {
  return (
    <div className="mr-20">
      <div className="space-y-4">
        <h1 className="font-medium text-3xl">How Okra powers businesses</h1>
        <p className="text-base">
          A single API for multiple use cases across industries.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 pt-10">
        {dataToMap?.map((el: HowBusinessType) => (
          <HowBusinessCard
            key={el?.id}
            title={el?.title}
            subTitle={el?.subTitle}
            content={el?.content}
            icon={el?.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default HowOkraPower;
