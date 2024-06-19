import { CardWithImage } from "../components/Cards"
import MainImage from "../components/MainImage"



export default function Home() {
  return (
    <div className="w-full">

      < MainImage />
      <div className="lg:m-40 md:m-40 sm:m-32 mt-28 m-4">
        <CardWithImage />
      </div>

    </div>

  );
}
