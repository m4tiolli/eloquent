import Header from "@/components/Header/Header";
import Image from "next/image";
import { BsChevronCompactDown, BsChevronRight } from "react-icons/bs";
import mockup from "../public/mockup.png";

export default function Home() {
  return (
    <main className="select-none">
      <Header />
      <div className="h-dvh w-full px-20 flex items-center justify-between">
        <Image
          src={mockup}
          alt="Phone"
          sizes="50%"
          style={{
            width: "50%",
            height: "65%",
            objectFit: "contain",
            objectPosition: "left",
          }}
          quality={100}
          placeholder="blur"
          priority
        />
        <h1 className="text-7xl font-bold w-1/2">
          A new way to manage your bills
        </h1>
        <BsChevronCompactDown className="text-white animate-pulse cursor-pointer text-4xl absolute bottom-3 left-1/2 -translate-x-1/2 flex" />
      </div>
      <div className="h-dvh w-full px-20 flex items-center justify-start">
        <h1 className="text-7xl font-bold w-1/2">
          Have as much control as possible over your bills
        </h1>
        <div>
          <p>
            With the <i>Eloquent&trade;</i> you have control over your
            individual and shared expenses with accurate forecasts
          </p>
          <button className="flex items-center justify-between px-4 pr-6 py-2 rounded-md border-[1px] border-white hover:brightness-125 hover:opacity-75 transition-all">See prices <BsChevronRight /> </button>
        </div>
      </div>
    </main>
  );
}
