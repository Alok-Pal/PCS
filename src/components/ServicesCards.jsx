// // import { Button } from "../components/ui/button";
// // import { Card, CardContent } from "../components/ui/card";
// // import { RightArrow } from "../lib/utils";
// // import Image from "next/image";

// // const ServicesCards = () => {
// //   const data = [
// //     {
// //       img: "/assets/group-chat.png",
// //       title: "Business consulting",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
// //     },
// //     {
// //       img: "/assets/lawyer.png",
// //       title: "Business consulting",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
// //     },
// //     {
// //       img: "/assets/environment.png",
// //       title: "Business consulting",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
// //     },
// //     {
// //       img: "/assets/planning.png",
// //       title: "Business consulting",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
// //     },
// //     {
// //       img: "/assets/financial.png",
// //       title: "Business consulting",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
// //     },
// //     {
// //       img: "/assets/mortgage.png",
// //       title: "Business consulting",
// //       description:
// //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
// //     },
// //   ];

// //   return (
// //     <>
// //       {data?.map((item, index) => (
// //         <div key={index} className="grid grid-cols-3">
// //           <Card className="  pb-10">
// //             <CardContent className="h-full">
// //               <div className=" w-full h-full">
// //                 <div className="relative   mt-7">
// //                   <Image
// //                     className="rounded-lg"
// //                     alt="cardImg"
// //                     src={`${item.img}`}
// //                     //   fill
// //                     //   objectFit="cover"
// //                     //   quality={100}
// //                     //   sizes="100vw"
// //                     width={20}
// //                     height={20}
// //                   />
// //                 </div>
// //                 <div className="">{item.title}</div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       ))}
// //     </>
// //   );
// // };

// // export default ServicesCards;

// import { Button } from "../components/ui/button";
// import { Card, CardContent } from "../components/ui/card";
// import { RightArrow } from "../lib/utils";
// import Image from "next/image";

// const ServicesCards = () => {
//   const data = [
//     {
//       img: "/assets/group-chat.png",
//       title: "Business consulting",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
//     },
//     {
//       img: "/assets/lawyer.png",
//       title: "Business consulting",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
//     },
//     {
//       img: "/assets/environment.png",
//       title: "Business consulting",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
//     },
//     {
//       img: "/assets/planning.png",
//       title: "Business consulting",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
//     },
//     {
//       img: "/assets/financial.png",
//       title: "Business consulting",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
//     },
//     {
//       img: "/assets/mortgage.png",
//       title: "Business consulting",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.",
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:mx-40 md:mx-32 mx-12 my-10 mt-14 font-serif">
//       {data.map((item, index) => (
//         <>
//           <Card key={index} className="pb-10">
//             <CardContent className="h-full">
//               <div className="w-full h-full">
//                 <div className="relative mt-7">
//                   <Image
//                     className=""
//                     alt="cardImg"
//                     src={item.img}
//                     width={50} // Adjusted size for a better fit
//                     height={50} // Adjusted size for a better fit
//                     quality={100}
//                   />
//                 </div>
//                 <div className="mt-4 text-lg font-bold">{item.title}</div>
//                 <div className="mt-2 text-sm">{item.description}</div>
//               </div>
//             </CardContent>
//           </Card>
//           {index === 2 && (
//             <div className="w-full h-5 bg-orange-700">

//             </div>
//           )}
//         </>
//       ))}
//     </div>
//   );
// };

// export default ServicesCards;

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { RightArrow } from "../lib/utils";
import Image from "next/image";

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
    <div className="lg:mx-40 md:mx-32 mx-12 my-10 mt-14 font-serif">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {data.map((item, index) => (
          < >
            <Card key={index} className="pb-10">
              <CardContent className="h-full">
                <div className="w-full h-full">
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
                  <div className="mt-4 text-lg font-bold">{item.title}</div>
                  <div className="mt-2 text-sm">{item.description}</div>
                </div>
              </CardContent>
            </Card>
            {(index + 1) % 3 === 0 && index !== data.length - 1 && (
              <div className="hidden md:block w-full h-1 bg-orange-700 col-span-full"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;

