// 'use client'
// import React, { useRef } from "react";
// import Autoplay from "embla-carousel-autoplay"
// import { Card, CardContent } from "../components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel";
// import Image from "next/image";

// const CarouselSlider = () => {
//   const plugin = useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true }),
//   );

//   const carouselData =[
//     {
//     img :"/assets/logo1.png"
//   },
//   {
//     img :"/assets/logo2.png"
//   }, {
//     img :"/assets/logo3.png"
//   }, {
//     img :"/assets/logo4.png"
//   }, 
// ]

//   return (
//     <div className="m-20">
//       <Carousel
//         plugins={[plugin.current]}
//         opts={{
//             loop: true
//         }}
//         className="w-full max-w-xs"
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//         loop
//       >
//         <CarouselContent>

//             {carouselData?.map((item,index)=>(
//                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                 {/* <div className="p-1"> */}
//                   {/* <Card> */}
//                     {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
//                     <Image src={`${item?.img}`} alt="index"    width={90} height={90}/>
//                     {/* </CardContent> */}
//                   {/* </Card> */}
//                 {/* </div> */}
//               </CarouselItem>
//             ))}
       
//       </CarouselContent>
       
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselSlider;



// 'use client'
// import React, { useRef } from "react";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel";
// import Image from "next/image";

// const CarouselSlider = () => {
//   const plugin = useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: false }),
//   );

//   const carouselData = [
//     {
//       img: "/assets/logo1.png",
//     },
//     {
//       img: "/assets/logo2.png",
//     },
//     {
//       img: "/assets/logo3.png",
//     },
//     {
//       img: "/assets/logo4.png",
//     },
//   ];

//   return (
//     <div className="m-20">
//       <Carousel
//         plugins={[plugin.current]}
//         opts={{
//           loop: true,
//         }}
//         className="w-full max-w-lg"
//         // onMouseEnter={plugin.current.stop}
//         // onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent>
//           {carouselData.map((item, index) => (
//             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//               <div className="p-1 flex justify-center items-center">
//                 <Image src={item.img} alt={`logo-${index}`} width={90} height={90} />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselSlider;







'use client'
import React, { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Image from "next/image";

const CarouselSlider = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  const carouselData = [
    {
      img: "/assets/logo1.png",
    },
    {
      img: "/assets/logo2.png",
    },
    {
      img: "/assets/logo3.png",
    },
    {
      img: "/assets/logo4.png",
    },
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size and update state
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:m-20 md:m-20 sm:m-16 m-16">
      {isLargeScreen ? (
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="w-full max-w-lg"
        >
          <CarouselContent>
            {carouselData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 flex justify-center items-center">
                  <Image src={item.img} alt={`logo-${index}`} width={90} height={90} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {carouselData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="px-5">
                  <Image src={item.img} alt={`logo-${index}`} width={90} height={90} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};

export default CarouselSlider;

