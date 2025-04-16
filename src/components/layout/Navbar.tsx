"use client";

import Image from "next/image";
import React from "react";
import banner from "@/assets/banner-pattern.svg";
import banner1 from "@/assets/banner-pattern2.svg";
import log from "@/assets/logo.svg";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full text-gray-900 mx-auto flex items-center justify-center flex-col">
      <nav className="w-full text-gray-900 mx-auto flex items-center justify-between">
        <Image src={banner} width={250} height={100} alt="" />
        <Image src={banner1} width={250} height={100} alt="" />
      </nav>
      <nav className="w-full bg-white text-gray-900 mx-auto">
        <div className="flex max-w-[1250px] mx-auto w-full justify-between items-center px-16">
          <Image
            src={log}
            width={34}
            height={34}
            alt="Interbank system logo"
            className="size-[80px] max-xl:size-14"
          />

          <div className="flex items-center justify-center">
            {navbarLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`);

              return (
                <Link
                  href={item.route}
                  key={item.label}
                  className={cn(
                    "flex gap-3 items-center md:px-3 2xl:px-8 rounded-lg justify-center xl:justify-start",
                    { "bg-bank-gradient": isActive }
                  )}
                >
                  <p
                    className={cn(
                      "text-16 font-semibold text-black-2 max-xl:hidden capitalize",
                      { "!text-white": isActive }
                    )}
                  >
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="flex gap-x-4">
            <Link
              href={"sign-in"}
              className="flex gap-3 items-center  rounded-lg justify-center xl:justify-start"
            >
              <p
                className={cn(
                  "text-16 font-semibold text-black-2 max-xl:hidden capitalize"
                )}
              >
                Login
              </p>
            </Link>
            <PrimaryBtn label="Contact Sales" type="submit" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
