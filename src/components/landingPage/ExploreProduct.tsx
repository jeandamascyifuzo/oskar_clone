"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tabs from "../tab/Tabs";
import TabCards from "../cards/TabCards";
import { Fade } from "react-awesome-reveal";
import dLocal from "@/assets/company/dlocal.svg";
import food from "@/assets/company/food-court.svg";
import fair from "@/assets/company/fairmoney.svg";
import interSwitch from "@/assets/company/interswitch.svg";
import chaka from "@/assets/company/chaka.svg";
import glover from "@/assets/company/glover.svg";
import palm from "@/assets/company/palm-credit.svg";
import renmoney from "@/assets/company/renmoney.svg";
import blackcopper from "@/assets/company/blackcopper.svg";
import swipeng from "@/assets/company/swipeng.svg";
import aella from "@/assets/company/aella.svg";
import carbon from "@/assets/company/carbon.svg";
import credpal from "@/assets/company/credpal.svg";
import bento from "@/assets/company/bento.svg";
import autochek from "@/assets/company/autochek.svg";
import indicina from "@/assets/company/indicina.svg";
import lendigo from "@/assets/company/lendigo.svg";
import kippa from "@/assets/company/kippa.svg";

import slider1 from "@/assets/exploreImages/111.svg";
import slider2 from "@/assets/exploreImages/2222.svg";
import slider3 from "@/assets/exploreImages/3333.svg";
import slider4 from "@/assets/exploreImages/4444.svg";
import slider5 from "@/assets/exploreImages/5555.svg";
import slider6 from "@/assets/exploreImages/66666.svg";

const ExploreProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const handleTabChange = (newIndex: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
  };

  const tabs = [
    {
      label: "Identity",
      content: (
        <TabCards
          currentTab={"Identity"}
          title={"Speed up your onboarding"}
          descrition={
            "Reliably sign up your prospects with their KYC profile from any financial institution in seconds."
          }
          company={[chaka, glover, palm]}
          color="#f7d002"
          mainImg={slider1}
        />
      ),
    },
    {
      label: "Income",
      content: (
        <TabCards
          currentTab={"Income"}
          title={"Supercharge financial management"}
          descrition={
            "Design personal financial management experiences with consolidated data."
          }
          company={[renmoney, blackcopper, swipeng]}
          color="#b5f95a"
          mainImg={slider2}
        />
      ),
    },
    {
      label: "Payments",
      content: (
        <TabCards
          currentTab={"Payments"}
          title={"Collect bank payments efficiently"}
          descrition={
            "Collect one-time and recurring payments from your customers via USSD and internet banking."
          }
          company={[interSwitch, dLocal, food]}
          color="#7664fe"
          mainImg={slider3}
        />
      ),
    },
    {
      label: "Balance",
      content: (
        <TabCards
          currentTab={"Balance"}
          title={"Get real-time balance information"}
          descrition={
            "Validate the buying power of your customers and reduce failed payments."
          }
          company={[fair, aella, carbon]}
          color="#f7d002"
          mainImg={slider4}
        />
      ),
    },
    {
      label: "Transactions",
      content: (
        <TabCards
          currentTab={"Transactions"}
          title={"Get helpful financial context"}
          descrition={
            "Profile customers with transaction history data of up to 24 months."
          }
          company={[credpal, bento, autochek]}
          color="#7664fe"
          mainImg={slider5}
        />
      ),
    },
    {
      label: "Authentication",
      content: (
        <TabCards
          currentTab={"Authentication"}
          title={"Verify financial credentials"}
          descrition={
            "Validate your customers’ financial information in real-time."
          }
          company={[indicina, lendigo, kippa]}
          color="#b5f95a"
          mainImg={slider6}
        />
      ),
    },
  ];

  return (
    <section className="flex w-full py-6">
      <div className="w-[25%] text-gray-600 space-y-4 flex flex-col">
        <div className="space-y-3 mb-20">
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
        <div className="text-medium rounded-lg w-full overflow-hidden relative">
          <Fade
            key={activeIndex}
            direction={activeIndex > prevIndex ? "right" : "left"}
            duration={300}
            cascade
            damping={0.1}
            triggerOnce
          >
            <div className="bg-[#f8f4f5] w-full">
              {tabs[activeIndex]?.content}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ExploreProduct;
