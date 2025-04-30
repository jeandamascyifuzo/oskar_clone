import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import Animation from "../Animation";

const ExploreOkraDoc = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="gap-y-4 flex flex-col">
        <h1 className="font-medium text-3xl">One API for all financial data</h1>
        <p className="w-[25rem]">{`Implement any or all of Okra's products with just a few lines of code in any language!`}</p>
        <div>
          <PrimaryBtn label="Explore Okra docs" type="submit" />
        </div>
      </div>
      <div className="bg-[#344053] py-4 pl-2 h-[32rem] w-1/2 rounded-lg">
        <Animation />
      </div>
    </div>
  );
};

export default ExploreOkraDoc;
