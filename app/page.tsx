"use client";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { BsChevronCompactDown, BsChevronRight } from "react-icons/bs";
import mockup from "../public/mockup.png";
import mockupfront from "../public/mockup-front.png";
import classNames from "classnames";
import { useRef } from "react";

interface Dados {
  id: number;
  nome: string;
  price: number;
  beneficios: {
    contas: number;
    previsao: number;
    alertas: boolean;
    historico: number;
    aplicativo: boolean;
    temporeal?: boolean;
    customizacao: boolean;
  };
}

const dados: Dados[] = [
  {
    id: 1,
    nome: "Individual",
    price: 25,
    beneficios: {
      contas: 1,
      previsao: 7,
      alertas: true,
      historico: 14,
      aplicativo: false,
      customizacao: true,
    },
  },
  {
    id: 2,
    nome: "Shared",
    price: 50,
    beneficios: {
      contas: 2,
      previsao: 14,
      alertas: true,
      historico: 30,
      temporeal: true,
      aplicativo: true,
      customizacao: true,
    },
  },
  {
    id: 3,
    nome: "Family",
    price: 100,
    beneficios: {
      contas: 5,
      previsao: 30,
      alertas: true,
      historico: 60,
      aplicativo: true,
      customizacao: true,
      temporeal: true,
    },
  },
  {
    id: 4,
    nome: "Enterprise",
    price: 200,
    beneficios: {
      contas: 100,
      previsao: 365,
      alertas: true,
      historico: 365,
      aplicativo: true,
      temporeal: true,
      customizacao: true,
    },
  },
];

const CardPrices = ({ dado }: { dado: Dados }) => {
  return (
    <div className=" w-[22%] h-full flex flex-col items-center justify-start py-6 px-2 rounded-lg border-[1px] border-white relative overflow-clip box-border hover:scale-[1.05] transition-all cursor-pointer">
      <div
        className={classNames("h-6 w-full -rotate-45 absolute -left-20 top-0", {
          "bg-white": dado.id == 2,
        })}
      ></div>
      <h1 className="font-bold text-3xl">{dado.nome}</h1>
      <span className="flex items-start gap-1">
        <h1 className="font-bold text-3xl">{`R$${dado.price}`}</h1>
        <p>/month</p>
      </span>
      <button className="flex items-center justify-between px-4 py-2 rounded-md border-[1px] border-white hover:opacity-75 transition-all hover:bg-white hover:text-black hover:font-semibold">
        Start now
      </button>
    </div>
  );
};

export default function Home() {
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const section3 = useRef<HTMLDivElement>(null);
  const section4 = useRef<HTMLDivElement>(null);

  return (
    <main className="select-none snap-y snap-proximity scroll-smooth">
      <Header />
      <div
        className="h-dvh w-full px-20 flex items-center justify-between snap-start"
        ref={section1}
      >
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
        <BsChevronCompactDown
          className="text-white animate-pulse cursor-pointer text-4xl absolute bottom-3 left-1/2 -translate-x-1/2 flex"
          onClick={() =>
            window.scrollTo({
              top: (section2.current as HTMLDivElement).offsetTop,
              left: 0,
              behavior: "smooth",
            })
          }
        />
      </div>
      <div
        className="h-dvh w-full px-20 flex items-center justify-between relative snap-start"
        ref={section2}
      >
        <h1 className="text-7xl font-bold w-1/2">
          Have as much control as possible over your bills
        </h1>
        <div className="w-2/5 flex flex-col items-left gap-4 justify-center">
          <p>
            With the <i>Eloquent&trade;</i> you have control over your
            individual and shared expenses with accurate forecasts.
          </p>
          <button className="flex items-center justify-between px-4 w-[30%] pr-6 py-2 rounded-md border-[1px] border-white hover:brightness-125 hover:opacity-75 transition-all group">
            See prices{" "}
            <BsChevronRight className="group-hover:translate-x-2 transition-all" />{" "}
          </button>
        </div>
        <BsChevronCompactDown
          onClick={() =>
            window.scrollTo({
              top: (section3.current as HTMLDivElement).offsetTop,
              left: 0,
              behavior: "smooth",
            })
          }
          className="text-white animate-pulse cursor-pointer text-4xl absolute bottom-3 left-1/2 -translate-x-1/2 flex"
        />
      </div>
      <div
        className="h-dvh w-full px-20 py-20 flex items-center justify-center gap-12 snap-end relative flex-col"
        ref={section3}
      >
        <h1 className="font-bold text-4xl">
          Select the best offer for your use.
        </h1>
        <div className="h-full w-full flex items-center justify-center gap-12">
          {dados.map((dado, index) => (
            <CardPrices key={index++} dado={dado} />
          ))}
        </div>
      </div>
      <div
        className="h-dvh w-full px-20 py-32 flex items-center justify-start gap-12 snap-end overflow-y-clip relative flex-col"
        ref={section4}
      >
        <h1 className="text-5xl font-bold">
          Work on big ideas, without the busywork.
        </h1>
        <button className="flex items-center justify-between px-4 py-2 rounded-md border-[1px] border-white hover:opacity-75 transition-all hover:bg-white hover:text-black hover:font-semibold">
          Get started now
        </button>
        <Image
          src={mockupfront}
          alt="Phone"
          sizes="50%"
          style={{
            width: "70%",
            height: "85%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          quality={100}
          placeholder="blur"
          priority
          className="absolute -bottom-60 z-[3]"
        />
        <div className="w-[1000px] h-[1000px] absolute -bottom-[130vh] z-[2] bg-[#171717] rounded-full"></div>
      </div>
    </main>
  );
}
