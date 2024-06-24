"use client"
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { RightArrow } from "../lib/utils";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";

export function CardWithImage() {
  return (
   <>
    <Card className="w-full pb-10">
      <CardContent className="h-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full h-full">
          <Slide direction="up" duration={800}>
            <div className="relative w-full h-[55vh] mt-7">
              <Image
                className="rounded-lg"
                alt="cardImg"
                src="/assets/cardImg.jpg"
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                priority="true"
              />
            </div>
          </Slide>
          <div className="p-4">
            <Slide direction="up" duration={800}>
              <p className="text-2xl md:text-4xl font-bold font-serif mt-7 leading-10">
                We Will Help You For Grow
              </p>
              <p className="text-2xl md:text-4xl font-bold font-serif leading-4 text-orange-800">
                Business.
              </p>
            </Slide>
            <Slide direction="up" duration={800}>
              <p className="mt-9 text-xl font-serif">
                PCS is a provider of innovative software solutions for
                businesses across industries. With a dedicated team of skilled
                developers,
                <span className="font-bold">
                  {" "}
                  we specialize in creating cutting-edge applications and
                  tailored software to streamline operations, enhance
                  productivity, and drive digital transformation.{" "}
                </span>
              </p>
            </Slide>
            <Slide direction="up" duration={1300}>
              <Button className="mt-5 bg-orange-800 hover:bg-orange-800 font-serif h-14 font-bold">
                Explore more &nbsp; <RightArrow />
              </Button>
            </Slide>
          </div>
        </div>
      </CardContent>
    </Card></>
  );
}
