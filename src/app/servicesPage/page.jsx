// // "use client";
// // import { Fade, Slide } from "react-awesome-reveal";
// // import { CardWithImage } from "../../components/Cards";
// // import TeamMembers from "../../components/TeamMembers";
// // import AboutUs from "../../components/AboutUs";
// // import Image from "next/image";

// // const Service = () => {
// //   return (
// //     <>
// //       <Slide direction="up" duration={1000} fraction={0}>
// //         <div className="font-serif h-[90vh] bgImage" style={{ marginTop: "" }}>
// //           <div className="z-20  sm:pt-40 pt-24 relative flex justify-center font-serif">
// //             <div className="grid sm:grid-cols-2 grid-cols-1  relative z-10">
// //               <div className="h-full">
// //                 <Slide direction="up" duration={900} fraction={0}>
// //                   <h1 className=" md:text-7xl sm:text-4xl text-4xl text-center font-bold mb-8 text-white">
// //                     Service Details
// //                   </h1>
// //                 </Slide>
// //                 <Slide direction="up" duration={1000} fraction={0}>
// //                   <p className="text-white max-w-lg mx-auto my-2 text-2xl text-center">
// //                     Home{" "}
// //                     <span className="text-orange-600 hover:text-white">::</span>{" "}
// //                     Service
// //                   </p>
// //                 </Slide>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="relative z-10">
// //           <div
// //             className="triangle"
// //             style={{
// //               borderTop: "9rem solid transparent",
// //               borderRight: "9rem solid #292929",
// //               marginTop: "-9rem",
// //             }}
// //           ></div>
// //         </div>
// //       </Slide>
// //       <div className="grid grid-cols-[70%_30%]  font-serif">
// //         <div className="bg-gray-300 pt-20 pl-36  ">
// //           <p className="  font-bold text-5xl ">
// //             Software{" "}
// //             <span className="  font-bold text-orange-700 hover:text-black. ">
// //               Development.
// //             </span>
// //           </p>
// //           <p className="mt-10 ">
// //             Lorem Ipsum is simply dummy text of the printing and typesetting
// //             industry. Lorem Ipsum has been industry’s standard dummy text ever
// //             since the 1500s, when an unknown printer took a galley of type and
// //             scrambled it to make a type specimen book. It has survived not only
// //             five centuries, but also the leap into electronic typesetting,
// //             remaining essentially unchanged.
// //           </p>

// //           <div className="relative pt-4">
// //             <Image
// //               className=""
// //               alt="cardImg"
// //               src="/assets/serviceImg.jpg"
// //               width={800} // Adjusted size for a better fit
// //               height={400} // Adjusted size for a better fit
// //               quality={100}
// //             />
// //           </div>

// //           <div className="mt-6">
// //             <p className="font-bold text-3xl text-black ">
// //               Helping Business Owners.
// //             </p>

// //             <div className=" text-black mt-3">
// //               There are many variations of passages of Lorem Ipsum available,
// //               but the majority have suffered alteration in som form, by injected
// //               humour, or randomised words which don’t look even slightly
// //               believable. If you are going to use a passage of Lorem Ipsum, you
// //               need to be sure there isn’t anything embarrassing hidden in the
// //               middle of text. All th Lorem Ipsum generators on the Internet tend
// //               to repeat predefined chunks as necessary, making this the first
// //               true generator on the Internet. It uses a dictionary of over 200
// //               Latin words, combined with a handful of model sentenc structures,
// //               to generate Lorem Ipsum which looks reasonable. The generated
// //               Lorem Ipsum is therefore always fre from repetition, injected
// //               humour, or non-characteristic words etc.
// //               <p className=" mt-3">
// //                 There are many variations of passages of Lorem Ipsum available,
// //                 but the majority have suffered alteration in som form, by
// //                 injected humour, or randomised words which don’t look even
// //                 slightly believable. If you are going to use a passage of Lorem
// //                 Ipsum, you need to be sure there isn’t anything embarrassing
// //                 hidden in the middle of text. All th Lorem Ipsum generators on
// //                 the Internet tend to repea.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="mt-6">
// //             <p className="font-bold text-3xl text-black ">
// //               Business Iformation & Advice.
// //             </p>

// //             <div className=" text-black mt-3">
// //               There are many variations of passages of Lorem Ipsum available,
// //               but the majority have suffered alteration in som form, by injected
// //               humour, or randomised words which don’t look even slightly
// //               believable. If you are going to use a passage of Lorem Ipsum, you
// //               need to be sure there isn’t anything embarrassing hidden in the
// //               middle of text. All th Lorem Ipsum generators on the Internet tend
// //               to repeat.
// //               <p className=" mt-3">
// //                 There are many variations of passages of Lorem Ipsum available,
// //                 but the majority have suffered alteration in som form, by
// //                 injected humour, or randomised words which don’t look even
// //                 slightly believable. If you are going to use a passage of Lorem
// //                 Ipsum, you need to be sure there isn’t anything embarrassing
// //                 hidden in the middle of text. All the Lorem Ipsum generators on
// //                 the Internet tend to repeat.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="  font-bold">
// //           <div className="pt-20 px-2 font-bold text-3xl ">Our Services</div>

// //           <div className="mt-10 w-64 p-4 ps-3 font-bold text-lg bg-gray-100 service ">
// //             Software Development
// //           </div>
// //           <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg bg-gray-100 service">
// //             Business Information
// //           </div>
// //           <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg bg-gray-100 service ">
// //             Helping Advice
// //           </div>
// //         </div>
// //       </div>

// //       <div>
// //         <AboutUs />
// //       </div>
// //       <style jsx>{`
// //         .triangle {
// //           position: relative;
// //         }
// //         .triangle:before {
// //           content: "";
// //           position: absolute;
// //           top: -150px; /* Positioning the shadow to match the triangle */
// //           right: -8.7rem;
// //           width: 0;
// //           height: 0;
// //           border-top: 9rem solid transparent;
// //           border-right: 9rem solid #d44f1fc7;
// //           box-shadow: inset -10px 0 10px -5px #9a3412;
// //           z-index: -1;
// //         }
// //         .bgImage {
// //           background: linear-gradient(
// //               45deg,
// //               rgba(169, 75, 40, 0.5),
// //               rgb(169, 75, 40, 0.5)
// //             ),
// //             url("/assets/AboutUsMainImg.jpg");
// //           background-size: cover;
// //           background-position: left center; /* Adjust the image position for smaller devices */
// //           height: 65vh;
// //         }
// //         .service {
// //           background: linear-gradient(to right, white 50%, orange 50%),url("/assets/AboutUsMainImg.jpg");;
// //           background-size: 200% 100%;
// //           margin-left: 10px;
// //           transition: background-position 1s ease;
// //         }
// //         .service:hover {
// //           background-position: right center;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default Service;

// "use client";
// import { Fade, Slide } from "react-awesome-reveal";
// import { CardWithImage } from "../../components/Cards";
// import TeamMembers from "../../components/TeamMembers";
// import AboutUs from "../../components/AboutUs";
// import Image from "next/image";

// const Service = () => {
//   return (
//     <>
//       <Slide direction="up" duration={1000} fraction={0}>
//         <div className="font-serif h-[90vh] bgImage" style={{ marginTop: "" }}>
//           <div className="z-20 sm:pt-40 pt-24 relative flex justify-center font-serif">
//             <div className="grid sm:grid-cols-2 grid-cols-1 relative z-10">
//               <div className="h-full">
//                 <Slide direction="up" duration={900} fraction={0}>
//                   <h1 className="md:text-7xl sm:text-4xl text-4xl text-center font-bold mb-8 text-white">
//                     Service Details
//                   </h1>
//                 </Slide>
//                 <Slide direction="up" duration={1000} fraction={0}>
//                   <p className="text-white max-w-lg mx-auto my-2 text-2xl text-center">
//                     Home{" "}
//                     <span className="text-orange-600 hover:text-white">::</span>{" "}
//                     Service
//                   </p>
//                 </Slide>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative z-10">
//           <div
//             className="triangle"
//             style={{
//               borderTop: "9rem solid transparent",
//               borderRight: "9rem solid #292929",
//               marginTop: "-9rem",
//             }}
//           ></div>
//         </div>
//       </Slide>
//       <div className="grid lg:grid-cols-[70%_30%] font-serif">
//         <div className="pt-20 lg:pl-36 md:pl-24 md:pr-24">
//           <p className="font-bold text-5xl">
//             Software{" "}
//             <span className="font-bold text-orange-700 hover:text-black">
//               Development.
//             </span>
//           </p>
//           <p className="mt-10">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been industry’s standard dummy text ever
//             since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only
//             five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged.
//           </p>

//           <div className="relative pt-4">
//             <Image
//               className=""
//               alt="cardImg"
//               src="/assets/serviceImg.jpg"
//               width={800}
//               height={400}
//               quality={100}
//             />
//           </div>

//           <div className="mt-6">
//             <p className="font-bold text-3xl text-black">
//               Helping Business Owners.
//             </p>

//             <div className="text-black mt-3">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, by
//               injected humour, or randomised words which don’t look even
//               slightly believable. If you are going to use a passage of Lorem
//               Ipsum, you need to be sure there isn’t anything embarrassing
//               hidden in the middle of text. All the Lorem Ipsum generators on
//               the Internet tend to repeat predefined chunks as necessary, making
//               this the first true generator on the Internet. It uses a
//               dictionary of over 200 Latin words, combined with a handful of
//               model sentence structures, to generate Lorem Ipsum which looks
//               reasonable. The generated Lorem Ipsum is therefore always free
//               from repetition, injected humour, or non-characteristic words etc.
//               <p className="mt-3">
//                 There are many variations of passages of Lorem Ipsum available,
//                 but the majority have suffered alteration in some form, by
//                 injected humour, or randomised words which don’t look even
//                 slightly believable. If you are going to use a passage of Lorem
//                 Ipsum, you need to be sure there isn’t anything embarrassing
//                 hidden in the middle of text. All the Lorem Ipsum generators on
//                 the Internet tend to repeat.
//               </p>
//             </div>
//           </div>

//           <div className="mt-6">
//             <p className="font-bold text-3xl text-black">
//               Business Information & Advice.
//             </p>

//             <div className="text-black mt-3">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, by
//               injected humour, or randomised words which don’t look even
//               slightly believable. If you are going to use a passage of Lorem
//               Ipsum, you need to be sure there isn’t anything embarrassing
//               hidden in the middle of text. All the Lorem Ipsum generators on
//               the Internet tend to repeat.
//               <p className="mt-3">
//                 There are many variations of passages of Lorem Ipsum available,
//                 but the majority have suffered alteration in some form, by
//                 injected humour, or randomised words which don’t look even
//                 slightly believable. If you are going to use a passage of Lorem
//                 Ipsum, you need to be sure there isn’t anything embarrassing
//                 hidden in the middle of text. All the Lorem Ipsum generators on
//                 the Internet tend to repeat.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="font-bold md:text-center">
//           <div className="pt-20 px-2 font-bold text-3xl">Our Services</div>
//           <div className="flex  md:justify-center" >
//             <div className="mt-10 w-64 p-4 ps-3 font-bold text-lg bg-gray-200 service">
//               Software Development
//             </div>
//             <div className="flex  md:justify-center" >
//               <div className="mt-10 w-64 p-4 ps-3 font-bold text-lg bg-gray-200 service">
//                 Business Information
//               </div> <div className="flex  md:justify-center" >
//                 <div className="mt-10 w-64 p-4 ps-3 font-bold text-lg bg-gray-200 service">
//                   Helping Advice
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div>
//             <AboutUs />
//           </div>
//           <style jsx>{`
//         .triangle {
//           position: relative;
//         }
//         .triangle:before {
//           content: "";
//           position: absolute;
//           top: -150px;
//           right: -8.7rem;
//           width: 0;
//           height: 0;
//           border-top: 9rem solid transparent;
//           border-right: 9rem solid #d44f1fc7;
//           box-shadow: inset -10px 0 10px -5px #9a3412;
//           z-index: -1;
//         }
//         .bgImage {
//           background: linear-gradient(
//               45deg,
//               rgba(169, 75, 40, 0.5),
//               rgb(169, 75, 40, 0.5)
//             ),
//             url("/assets/AboutUsMainImg.jpg");
//           background-size: cover;
//           background-position: left center;
//           height: 65vh;
//         }
//         .service {
//           background: linear-gradient(to right, #F3F4F6 50%, #de4b1a 50%),
//             url("/assets/AboutUsMainImg.jpg");
//           background-size: 200% 100%, cover;
//           background-position: left center, center;
//           margin-left: 10px;
//           transition: background-position 1s ease;
//         }
//         .service:hover {
//           background-position: right center, center;
//         }
//       `}</style>
//         </>
//         );
// };

//         export default Service;

"use client";
import { Fade, Slide } from "react-awesome-reveal";
import { CardWithImage } from "../../components/Cards";
import TeamMembers from "../../components/TeamMembers";
import AboutUs from "../../components/AboutUs";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <Slide direction="up" duration={1000} fraction={0}>
        <div className="font-serif h-[90vh] bgImage" style={{ marginTop: "" }}>
          <div className="z-20 sm:pt-40 pt-24 relative flex justify-center font-serif">
            <div className="grid sm:grid-cols-2 grid-cols-1 relative z-10">
              <div className="h-full">
                <Slide direction="up" duration={900} fraction={0}>
                  <h1 className="md:text-7xl sm:text-4xl text-4xl text-center font-bold mb-8 text-white">
                    Service Details
                  </h1>
                </Slide>
                <Slide direction="up" duration={1000} fraction={0}>
                  <p className="text-white max-w-lg mx-auto my-2 text-2xl text-center">
                    Home{" "}
                    <span className="text-orange-600 hover:text-white">::</span>{" "}
                    Service
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div
            className="triangle"
            style={{
              borderTop: "9rem solid transparent",
              borderRight: "9rem solid #292929",
              marginTop: "-9rem",
            }}
          ></div>
        </div>
      </Slide>
      <div className="grid lg:grid-cols-[70%_30%] font-serif bg-gray-100 ">
        <div className="pt-20 lg:pl-36 md:px-24 sm:px-14 px-7 mb-20">
          <Slide direction="up" duration={1000} fraction={0}>
            <p className="font-bold sm:text-5xl text-4xl">
              Software{" "}
              <span className="font-bold text-orange-700 hover:text-black">
                Development.
              </span>
            </p>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been industry’s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="relative pt-4">
              <Image
                className=""
                alt="cardImg"
                src="/assets/serviceImg.jpg"
                width={800}
                height={400}
                quality={100}
              />
            </div>
          </Slide>

          <Slide direction="up" duration={1000} fraction={0}>
            <div className="mt-6">
              <Slide direction="up" duration={1000} fraction={0}>
                <p className="font-bold text-3xl text-black">
                  Helping Business Owners.
                </p>
              </Slide>
              <Slide direction="up" duration={1000} fraction={0}>

                <div className="text-black mt-3">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don’t look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be sure there isn’t anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum generators on
                  the Internet tend to repeat predefined chunks as necessary, making
                  this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate Lorem Ipsum which looks
                  reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour, or non-characteristic words etc.
                  <p className="mt-3">
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don’t look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn’t anything embarrassing
                    hidden in the middle of text. All the Lorem Ipsum generators on
                    the Internet tend to repeat.
                  </p>
                </div>
              </Slide>
            </div>
          </Slide>
          <div className="mt-6">
            <Slide direction="up" duration={1000} fraction={0}>
              <p className="font-bold text-3xl text-black">
                Business Information & Advice.
              </p>
            </Slide>
            <Slide direction="up" duration={1000} fraction={0}>
              <div className="text-black mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn’t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat.
                <p className="mt-3">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don’t look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be sure there isn’t anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum generators on
                  the Internet tend to repeat.
                </p>
              </div>
            </Slide>
          </div>
        </div>

        <div className="font-bold lg:text-start md:text-center sm:text-center text-center mb-20">
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="pt-20 px-2 font-bold text-3xl">
              Our Services
            </div>
          </Slide>

          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex  lg:justify-start md:justify-center sm:justify-center justify-center">
              <div className="mt-10 w-64 p-4 ps-3 font-bold text-lg  service">
                Software Development
              </div>
            </div>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center ">
              <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg  service">
                Business Information
              </div>
            </div>
          </Slide>
          <Slide direction="up" duration={1000} fraction={0}>
            <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center">
              <div className="mt-2 w-64 p-4 ps-3 font-bold text-lg  service">
                Helping Advice
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <div>
        <AboutUs />
      </div>
      <style jsx>{`
        .triangle {
          position: relative;
        }
        .triangle:before {
          content: "";
          position: absolute;
          top: -150px;
          right: -8.7rem;
          width: 0;
          height: 0;
          border-top: 9rem solid transparent;
          border-right: 9rem solid #d44f1fc7;
          box-shadow: inset -10px 0 10px -5px #9a3412;
          z-index: -1;
        }
        .bgImage {
          background: linear-gradient(
              45deg,
              rgba(169, 75, 40, 0.5),
              rgb(169, 75, 40, 0.5)
            ),
            url("/assets/AboutUsMainImg.jpg");
          background-size: cover;
          background-position: left center;
          height: 65vh;
        }
        .service {
          background: linear-gradient(to right, #E0E0E0 50%, #de4b1a 50%),
            url("/assets/serviceImg.jpg");
          background-size: 200% 100%, cover;
          background-position: left center, center;
          margin-left: 10px;
          transition: background-position 1s ease;
        }
        .service:hover {
          background-position: right center, center;
        }
      `}</style>
    </>
  );
};

export default Service;
