"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tabs from "../tab/Tabs";
import TabCards from "../cards/TabCards";
import { Fade } from "react-awesome-reveal";

const ExploreProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const handleTabChange = (newIndex: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
  };

  const tabs = [
    {
      label: "Profile",
      content: <TabCards currentTab={activeIndex + 1} />,
    },
    {
      label: "Dashboard",
      content: <TabCards currentTab={activeIndex + 1} />,
    },
    {
      label: "Settings",
      content: <TabCards currentTab={activeIndex + 1} />,
    },
    {
      label: "Contact",
      content: <TabCards currentTab={activeIndex + 1} />,
    },
    {
      label: "Disabled",
      content: <TabCards currentTab={activeIndex + 1} />,
    },
  ];

  return (
    <section className="flex w-full py-6">
      <div className="w-[20%] text-gray-600 space-y-4 flex flex-col">
        <div className="space-y-3">
          <h1 className="font-medium text-3xl">Explore core products</h1>
          <div className="flex items-center space-x-1 group">
            <Link
              href="/"
              className="relative text-[#009e74] hover:text-[#009e74] link-with-underline text-lg"
            >
              See all products
            </Link>
            <IoIosArrowRoundForward className="text-[#009e74] icon-push" />
          </div>
        </div>
        <Tabs
          tabs={tabs}
          activeIndex={activeIndex}
          handleTabChange={handleTabChange}
        />
      </div>
      <div className="flex-1 w-full text-gray-600 mr-20">
        <div className="p-6 text-medium rounded-lg w-full overflow-hidden relative h-full">
          <Fade
            key={activeIndex}
            direction={activeIndex > prevIndex ? "right" : "left"}
            duration={600}
            cascade
            damping={0.1}
            triggerOnce
          >
            <div className="bg-[#f4f6f8] w-full">
              {tabs[activeIndex]?.content}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ExploreProduct;
