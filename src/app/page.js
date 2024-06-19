import { CardWithImage } from "../components/Cards"
import CarouselSlider from "../components/CarouselSlider";
import MainImage from "../components/MainImage"
import ServicesCards from "../components/ServicesCards";



export default function Home() {
  return (
    <div className="w-full">
      {/* Img */}
      < MainImage />

      {/* Card */}
      <div className="lg:m-40 md:m-40 sm:m-32 mt-20 m-4">
        <CardWithImage />
      </div>

      {/* Services */}
      <div className="bg-gray-100 ">
        <div className="pt-10">
          <p className="text-6xl text-center font-bold font-serif ">Services We Offer.</p>
        </div>
        <div className="w-full flex justify-center text-center">
          <p className="text-center max-w-[60vw] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        <div className="pb-10">
          <ServicesCards />
        </div>
      </div>

      {/* CarouselSlider */}

      <div className="lg:px-20 md:px-20 lg:pt-20 md:pt-20 p-2 grid lg:grid-cols-[40%_60%]">
        <div className="ps-24 pt-10 text-6xl font-bold font-serif" >
          Our Trusted Partners.
        </div>
        <div className="">
          <CarouselSlider />
        </div>
      </div>

    </div>

  );
}
