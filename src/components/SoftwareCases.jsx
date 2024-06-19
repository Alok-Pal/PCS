"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { RightArrow } from "../lib/utils";
import Image from "next/image";

const SoftwareCases = () => {
  const data = [
    {
      img: "/assets/homeland.jpg",
      title: "HOMELAND SOLUTION",
      description: "Mortgage Advisor",
    },
    {
      img: "/assets/business.jpg",
      title: "BUSINESS SOLUTION",
      description: "Online Consulting",
    },
    {
      img: "/assets/homeland.jpg",
      title: "CORPORATE SERVICES",
      description: "Financial Consulting",
    },
  ];
  return (
    <>
      <div className="relative z-10">
        <div
          className="triangle"
          style={{
            borderBottom: "190px solid transparent",
            borderRight: "190px solid transparent",
            borderLeft: "190px solid #9A3412",
          }}
        ></div>
      </div>

      <div className="font-serif" style={{ marginTop: "-190px", backgroundColor: "#292929" }}>
        <div className="pt-28  ">
          <p className=" z-40 relative lg:text-6xl md:text-6xl sm:text-4xl  text-2xl text-white text-center font-bold">Consultancy Cases</p>
          <div className="flex justify-center "><p className="text-center max-w-[60vw] mt-4 text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam</p></div>
        </div>
        <div className="w-full pt-10 lg:px-40 md:px-40 sm:px-32 px-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pb-28 ">
          {data?.map((item, index) => (
            <div key={index} className="">
              <div className=" w-full h-full">
                <div className="relative mt-7">
                  <Image
                    className="rounded-lg"
                    alt="cardImg"
                    src={`${item.img}`}
                    width={350}
                    height={350}
                    //   fill
                    //   objectFit="cover"
                    //   quality={100}
                    //   sizes="100vw"
                    quality={100}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-orange-700 font-bold font-serif mt-7 leading-10">
                    {item?.title}
                  </p>
                  <p className="text-2xl text-white font-bold font-serif  leading-10">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Imp */}
      <style jsx>{`
        .triangle {
          position: relative;
        }
        .triangle:before {
          content: "";
          position: absolute;
          top: 6px; /* Positioning the shadow to match the triangle */
          left: -180px;
          width: 0;
          height: 0;
          border-bottom: 190px solid transparent;
          border-right: 190px solid transparent;
          border-left: 190px solid #f6ebe736; /* Light orange color with opacity */
          box-shadow: inset -10px 0 10px -5px #9a3412; /* Adjust for inner shadow */
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default SoftwareCases;
