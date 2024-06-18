import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { RightArrow, User } from "@/lib/utils";
import {
  UsersRound,
  NotepadText,
  LaptopMinimal,
  BriefcaseBusiness,
} from "lucide-react";
const MainImage = () => {
  return (
    <>
      <div className="relative w-full h-[89vh]">
        <Image
          alt="mainImg"
          src="/assets/mainImg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className="absolute lg:top-64 lg:left-96 md:top-64 md:left-60 sm:top-64 sm:left-60 transform -translate-x-1/2 -translate-y-1/2">
        <Label
          htmlFor=""
          className="text-xl font-bold font-serif text-orange-800 "
        >
          since 2018,
        </Label>

        <Label
          htmlFor=""
          className="lg:text-6xl md:text-4xl sm:text-2xl  font-bold font-serif dark:text-orange-500 "
        >
          <p className="mt-10">PAL </p>
          <p className="mt-2">Consultancy</p>
          <p className="mt-2">Services.</p>
        </Label>

        <div className="mt-7 ">
          <Button className="bg-orange-800 hover:bg-orange-700 dark:text-white font-serif font-bold ">
            Free Appointment &nbsp; <RightArrow />
          </Button>
        </div>
      </div>

      <div className="absolute flex w-[50%] h-20 bg-orange-800 top-[100%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="m-5 ps-6 flex ">
          <UsersRound className="text-white w-10 h-10" />
          <div>
            <span className="px-3 text-white font-bold font-serif ">100+</span>
            <p className="px-3 text-white font-bold font-serif"> Clients</p>
          </div>
        </div>
        <div className="m-5 flex ">
          <NotepadText className="text-white w-10 h-10" />
          <div>
            <span className="px-3 text-white font-bold font-serif ">50+</span>
            <p className="px-3 text-white font-bold font-serif"> Projects</p>
          </div>
        </div>
        <div className="m-5 flex ">
          <LaptopMinimal className="text-white w-10 h-10" />
          <div>
            <span className="px-3 text-white font-bold font-serif ">70+</span>
            <p className="px-3 text-white font-bold font-serif"> Solutions</p>
          </div>
        </div>
        <div className="m-5 flex ">
          <BriefcaseBusiness className="text-white w-10 h-10" />
          <div>
            <span className="px-3 text-white font-bold font-serif ">4+</span>
            <p className="px-3 text-white font-bold font-serif">Years Exp.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainImage;
