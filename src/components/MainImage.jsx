// import Image from "next/image";
// import React from "react";
// import { Label } from "../components/ui/label";
// import { Button } from "./ui/button";
// import { RightArrow, User } from "../lib/utils";
// import {
//   UsersRound,
//   NotepadText,
//   LaptopMinimal,
//   BriefcaseBusiness,
// } from "lucide-react";
// const MainImage = () => {
//   return (
//     <>
//       <div className="w-full h-[89vh]">
//         <Image
//           alt="mainImg"
//           src="/assets/mainImg.jpg"
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="absolute lg:top-64 lg:left-96 md:top-64 md:left-60 sm:top-64 sm:left-60 transform -translate-x-1/2 -translate-y-1/2">
//         <Label
//           htmlFor=""
//           className="text-xl font-bold font-serif text-orange-800 "
//         >
//           since 2018,
//         </Label>

//         <Label
//           htmlFor=""
//           className="lg:text-6xl md:text-4xl sm:text-2xl  font-bold font-serif dark:text-orange-500 "
//         >
//           <p className="mt-10">PAL </p>
//           <p className="mt-2">Consultancy</p>
//           <p className="mt-2">Services.</p>
//         </Label>

//         <div className="mt-7 ">
//           <Button className="bg-orange-800 hover:bg-orange-700 dark:text-white font-serif font-bold ">
//             Free Appointment &nbsp; <RightArrow />
//           </Button>
//         </div>
//       </div>

//       {/* <div className="absolute flex w-[50%] h-20 bg-orange-800 top-[100%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <div className="m-5 ps-6 flex ">
//           <UsersRound className="text-white w-10 h-10" />
//           <div>
//             <span className="px-3 text-white font-bold font-serif ">100+</span>
//             <p className="px-3 text-white font-bold font-serif"> Clients</p>
//           </div>
//         </div>
//         <div className="m-5 flex ">
//           <NotepadText className="text-white w-10 h-10" />
//           <div>
//             <span className="px-3 text-white font-bold font-serif ">50+</span>
//             <p className="px-3 text-white font-bold font-serif"> Projects</p>
//           </div>
//         </div>
//         <div className="m-5 flex ">
//           <LaptopMinimal className="text-white w-10 h-10" />
//           <div>
//             <span className="px-3 text-white font-bold font-serif ">70+</span>
//             <p className="px-3 text-white font-bold font-serif"> Solutions</p>
//           </div>
//         </div>
//         <div className="m-5 flex ">
//           <BriefcaseBusiness className="text-white w-10 h-10" />
//           <div>
//             <span className="px-3 text-white font-bold font-serif ">4+</span>
//             <p className="px-3 text-white font-bold font-serif">Years Exp.</p>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default MainImage;

// import Image from "next/image";
// import React from "react";
// import { Label } from "../components/ui/label";
// import { Button } from "./ui/button";
// import { RightArrow, User } from "../lib/utils";
// import {
//   UsersRound,
//   NotepadText,
//   LaptopMinimal,
//   BriefcaseBusiness,
// } from "lucide-react";

// const MainImage = () => {
//   return (
//     <>
//       {/* <div className="w-full h-[90vh] relative">
//         <Image
//           alt="mainImg"
//           src="/assets/mainImg.jpg"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div> */}
//       <div
//         className="relative"
//         style={{
//           backgroundImage: `url('/assets/mainImg.jpg')`, // Replace with your image path
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           // height: "89vh",
//         }}
//       >
//         <div className=" pt-10 lg:px-20 md:px-20 sm:px-20 px-16 ">
//           <Label
//             htmlFor=""
//             className="text-xl font-bold font-serif text-orange-800 "
//           >
//             since 2018,
//           </Label>

//           <Label
//             htmlFor=""
//             className="lg:text-6xl md:text-4xl sm:text-4xl text-2xl font-bold font-serif dark:text-orange-500 "
//           >
//             <p className="sm:mt-10 mt-4">PAL </p>
//             <p className="mt-2">Consultancy</p>
//             <p className="mt-2">Services.</p>
//           </Label>

//           <div className="sm:mt-7 mt-5 pb-20">
//             <Button className="bg-orange-800 hover:bg-orange-700 dark:text-white font-serif font-bold ">
//               Free Appointment &nbsp; <RightArrow />
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="absolute  border-white lg:bottom-9 md:bottom-9 sm:bottom-9 bottom-24 w-full pt-20  max-w-screen-xl mx-auto grid justify-center lg:py-10">
//         <div className="grid border-t-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 justify-center bg-orange-800 rounded-lg shadow-lg p-4 space-x-4 md:space-x-8">
//           <div className="flex ps-4 items-center space-x-2 md:space-x-3">
//             <UsersRound className="text-white w-10 h-10" />
//             <div>
//               <span className="text-white font-bold font-serif">100+</span>
//               <p className="text-white font-bold font-serif"> Clients</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 md:space-x-3">
//             <NotepadText className="text-white w-10 h-10" />
//             <div>
//               <span className="text-white font-bold font-serif">50+</span>
//               <p className="text-white font-bold font-serif"> Projects</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 md:space-x-3">
//             <LaptopMinimal className="text-white w-10 h-10" />
//             <div>
//               <span className="text-white font-bold font-serif">70+</span>
//               <p className="text-white font-bold font-serif"> Solutions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 md:space-x-3">
//             <BriefcaseBusiness className="text-white w-10 h-10" />
//             <div>
//               <span className="text-white font-bold font-serif">4+</span>
//               <p className="text-white font-bold font-serif">Years Exp.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainImage;

// import Image from "next/image";
// import React from "react";
// import { Label } from "../components/ui/label";
// import { Button } from "./ui/button";
// import { RightArrow } from "../lib/utils";
// import {
//   UsersRound,
//   NotepadText,
//   LaptopMinimal,
//   BriefcaseBusiness,
// } from "lucide-react";

// const MainImage = () => {
//   return (
//     <>
//       <div
//         className="relative"
//         style={{
//           backgroundImage: `url('/assets/mainImg.jpg')`, // Replace with your image path
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "90vh",
//           // paddingLeft: '5rem',
//         }}
//       >
//         <div className="pt-10 lg:px-20 md:px-20 sm:px-20 px-16">
//           <Label
//             htmlFor=""
//             className="text-xl font-bold font-serif text-orange-800 "
//           >
//             since 2018,
//           </Label>

//           <Label
//             htmlFor=""
//             className="lg:text-6xl md:text-4xl sm:text-4xl text-2xl font-bold font-serif dark:text-orange-500 "
//           >
//             <p className="sm:mt-10 mt-4">PAL </p>
//             <p className="mt-2">Consultancy</p>
//             <p className="mt-2">Services.</p>
//           </Label>

//           <div className="sm:mt-7 mt-5 pb-20">
//             <Button className="bg-orange-800 hover:bg-orange-700 dark:text-white font-serif font-bold ">
//               Free Appointment &nbsp; <RightArrow />
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className="border-white border-t-4 z-20 w-[45vw] max-w-screen-xl mx-auto grid justify-center -mt-16 lg:py-10 bg-orange-800 rounded-lg shadow-lg p-4 space-x-4 md:space-x-8">
//           <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center">
//             <div className="flex  items-center space-x-2 md:space-x-3">
//               <UsersRound className="text-white w-10 h-10" />
//               <div>
//                 <span className="text-white font-bold font-serif">100+</span>
//                 <p className="text-white font-bold font-serif"> Clients</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 md:space-x-3">
//               <NotepadText className="text-white w-10 h-10" />
//               <div>
//                 <span className="text-white font-bold font-serif">50+</span>
//                 <p className="text-white font-bold font-serif"> Projects</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 md:space-x-3">
//               <LaptopMinimal className="text-white w-10 h-10" />
//               <div>
//                 <span className="text-white font-bold font-serif">70+</span>
//                 <p className="text-white font-bold font-serif"> Solutions</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 md:space-x-3">
//               <BriefcaseBusiness className="text-white w-10 h-10" />
//               <div>
//                 <span className="text-white font-bold font-serif">4+</span>
//                 <p className="text-white font-bold font-serif">Years Exp.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainImage;

import Image from "next/image";
import React from "react";
import { Label } from "../components/ui/label";
import { Button } from "./ui/button";
import { RightArrow } from "../lib/utils";
import {
  UsersRound,
  NotepadText,
  LaptopMinimal,
  BriefcaseBusiness,
} from "lucide-react";
import './index.css'

const MainImage = () => {
  return (
    <>
      <div className="main-image relative">
        <div className="pt-10 lg:px-20 md:px-20 sm:px-20 px-16">
          <Label
            htmlFor=""
            className="text-xl font-bold font-serif text-orange-800 "
          >
            since 2018,
          </Label>

          <Label
            htmlFor=""
            className="lg:text-6xl md:text-4xl sm:text-4xl text-2xl font-bold font-serif dark:text-orange-500 "
          >
            <p className="sm:mt-10 mt-4">PAL </p>
            <p className="mt-2">Consultancy</p>
            <p className="mt-2">Services.</p>
          </Label>

          <div className="sm:mt-7 mt-5 pb-20">
            <Button className="bg-orange-800 hover:bg-orange-700 dark:text-white font-serif font-bold ">
              Free Appointment &nbsp; <RightArrow />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="border-white border-t-4 z-20 w-[45vw] max-w-screen-xl mx-auto grid justify-center -mt-16 lg:py-10 bg-orange-800 rounded-lg shadow-lg p-4 space-x-4 md:space-x-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center">
            <div className="flex  items-center space-x-2 md:space-x-3">
              <UsersRound className="text-white w-10 h-10" />
              <div>
                <span className="text-white font-bold font-serif">100+</span>
                <p className="text-white font-bold font-serif"> Clients</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <NotepadText className="text-white w-10 h-10" />
              <div>
                <span className="text-white font-bold font-serif">50+</span>
                <p className="text-white font-bold font-serif"> Projects</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <LaptopMinimal className="text-white w-10 h-10" />
              <div>
                <span className="text-white font-bold font-serif">70+</span>
                <p className="text-white font-bold font-serif"> Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <BriefcaseBusiness className="text-white w-10 h-10" />
              <div>
                <span className="text-white font-bold font-serif">4+</span>
                <p className="text-white font-bold font-serif">Years Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainImage;
