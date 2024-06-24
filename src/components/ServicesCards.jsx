"use client";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import { Fade, Slide } from "react-awesome-reveal";
const ServicesCards = () => {
  const data = [
    {
      img: "/assets/group-chat.png",
      title: "Business consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
    },
    {
      img: "/assets/lawyer.png",
      title: "Business consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
    },
    {
      img: "/assets/environment.png",
      title: "Business consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
    },
    {
      img: "/assets/planning.png",
      title: "Business consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
    },
    {
      img: "/assets/financial.png",
      title: "Business consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
    },
    {
      img: "/assets/mortgage.png",
      title: "Business consulting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
    },
  ];

  return (
    <>
      <Fade direction="bottom" duration={1000} fraction={0}>
        <div className="pb-16 bg-gray-100 ">
          <Slide direction="up" duration={1200}>
            <div className="pt-16">
              <p className="text-6xl text-center font-bold font-serif dark:text-black ">
                Services We Offer.
              </p>
            </div>
          </Slide>
          <Slide direction="up" duration={1100}>
            <div className="w-full flex justify-center text-center">
              <p className="text-center max-w-[60vw] mt-4 dark:text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim
                ad minim veniam
              </p>
            </div>
          </Slide>
          <div className="lg:mx-40 md:mx-32 mx-12 my-10 mt-14 font-serif">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {data.map((item, index) => (
                <>
                  <Slide direction="up" duration={800}>
                    <Card key={index} className="">
                      <CardContent className="h-full">
                        <div className="w-full h-full lg:p-8 md:p-4 sm:p-6 p-6">
                          <Slide direction="up" duration={1100}>
                            <div className="relative mt-7">
                              <Image
                                className=""
                                alt="cardImg"
                                src={item.img}
                                width={50} // Adjusted size for a better fit
                                height={50} // Adjusted size for a better fit
                                quality={100}
                              />
                            </div>
                          </Slide>
                          <Slide direction="up" duration={1200}>
                            <div className="mt-4 text-2xl font-bold">
                              {item.title}
                            </div>
                          </Slide>
                          <Slide direction="up" duration={1300}>
                            <div className="mt-3 text-lg text-gray-600 ">
                              {item.description}
                            </div>
                          </Slide>
                        </div>
                      </CardContent>
                    </Card>
                  </Slide>
                  {(index + 1) % 3 === 0 && index !== data.length - 1 && (
                    <div className="hidden md:block w-full h-1  col-span-full">
                      <Fade direction="bottom" duration={2000} fraction={0}>
                        <div className=" w-full h-1 bg-orange-700 col-span-full"></div>
                      </Fade>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ServicesCards;
