import Image from "next/image";
import React from "react";

const HowBusinessCard: React.FC<HowBusinessType> = ({
  title,
  subTitle,
  content,
  icon,
}) => {
  return (
    <div className="bg-white min-h-[22rem] px-8 py-6 rounded-md shadow flex flex-col">
      <div className="flex-1">
        <Image src={icon} width={50} height={0} alt="" />
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-gray-600 text-xs uppercase">{subTitle}</h3>
        <div className="space-y-2">
          <h1 className="font-bold">{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HowBusinessCard;
