import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { RightArrow } from "../lib/utils";
import Image from "next/image";

export function CardWithImage() {
  return (
    <Card className=" w-full pb-10">
      <CardContent className="h-full">
        <div className="grid grid-cols-2 w-full h-full">
          <div className="relative w-[100%] h-[100%] mt-7 ">
            <Image
              className="rounded-lg"
              alt="cardImg"
              src="/assets/cardImg.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
              sizes="100vw"
            />
          </div>
          <div className="ps-4">
            <p className="text-4xl font-bold font-serif mt-4 p-3 leading-10">
              We Will Help You For Grow
            </p>
            <p className="text-4xl font-bold font-serif px-3 leading-4 text-orange-800">
              Business.
            </p>
            <p className="mt-4 px-3 font-serif">
              PCS is a provider of innovative software solutions for businesses
              across industries. With a dedicated team of skilled developers,
              <span className="font-bold">
                {" "}
                we specialize in creating cutting-edge applications and tailored
                software to streamline operations, enhance productivity, and
                drive digital transformation.{" "}
              </span>
            </p>
            <Button className="mx-3 mt-5 bg-orange-800 hover:bg-orange-800 font-serif  font-bold">
              Explore more &nbsp; <RightArrow />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
