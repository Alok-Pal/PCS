//  'use client'
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

// const Navbar = () => {
//   const [accessToken, setAccessToken] = useState("");

//   const pathname = usePathname();

//   useEffect(() => {
//     const dataToken = localStorage.getItem("AccessToken");
//     setAccessToken(dataToken);
//   }, []);

//   const getLinkClass = (path) => {
//     return pathname === path ? "text-orange-700" : "text-gray-700";
//   };

//   return (
//     <>
//       <header className="shadow sticky z-50 top-0">
//         <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//           <div className="grid grid-cols-[40%_60%] items-center mx-auto max-w-screen-xl">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                 className="mr-3 h-12"
//                 width={120}
//                 height={20}
//                 alt="Logo"
//               />
//             </Link>
//             <div
//               className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
//               id="mobile-menu-2"
//             >
//               <ul
//                 className={`flex lg:flex-row  mt-4 font-medium lg:space-x-8 lg:mt-0 md:items-center`}
//                 style={{ alignItems: "center" }}
//               >
//                 <li>
//                   <NavigationMenuItem>
//                     <Link
//                       href="/"
//                       className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${getLinkClass(
//                         "/"
//                       )}`}
//                     >
//                       <NavigationMenuLink
//                         className={navigationMenuTriggerStyle()}
//                       >
//                         Home
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 </li>
//                 <li>
//                   <Link
//                     href="/about"
//                     className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${getLinkClass(
//                       "/about"
//                     )}`}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${getLinkClass(
//                       "/contact"
//                     )}`}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;


"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu"; // Ensure you import NavigationMenu
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [accessToken, setAccessToken] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const dataToken = localStorage.getItem("AccessToken");
    setAccessToken(dataToken);
  }, []);

  const getLinkClass = (path) => {
    return pathname === path ? "text-orange-700" : "text-gray-700";
  };

  return (
    <header className="shadow  z-50 top-0 font-serif text-xl">
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="grid grid-cols-[40%_60%] items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              width={120}
              height={20}
              alt="Logo"
            />
          </Link>
          <div
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <NavigationMenu>
              <ul
                className="flex lg:flex-row mt-4 font-medium lg:space-x-8 lg:mt-0 md:items-center"
                style={{ alignItems: "center" }}
              >
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold ${getLinkClass(
                        "/"
                      )}`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold ${getLinkClass(
                        "/about"
                      )}`}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-bold ${getLinkClass(
                        "/contact"
                      )}`}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </ul>
            </NavigationMenu>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
