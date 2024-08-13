"use client";
import Header from "@/components/Header/Header";
import Image from "next/image";
import { BsChevronCompactDown, BsChevronRight } from "react-icons/bs";
import mockup from "../public/mockup.png";
import mockupfront from "../public/mockup-front.png";
import classNames from "classnames";
import { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

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
    <div className=" xl:w-[22%] w-[90%] h-fit pb-28 xl:pb-0 xl:h-full flex flex-col items-center justify-start py-6 px-2 rounded-lg border-[1px] dark:border-white border-neutral-300 relative overflow-clip box-border gap-4 hover:scale-[1.05] transition-all cursor-pointer">
      <div
        className={classNames("h-6 w-full -rotate-45 absolute -left-20 top-0", {
          "dark:bg-white bg-neutral-800": dado.id == 2,
        })}
      ></div>
      <h1 className="font-bold text-3xl dark:text-white text-neutral-800">
        {dado.nome}
      </h1>
      <span className="flex items-start gap-1 dark:text-white text-neutral-800">
        <h1 className="font-bold text-3xl">{`R$${dado.price}`}</h1>
        <p>/month</p>
      </span>
      <ul className="dark:font-thin font-normal">
        <li className="flex items-center gap-2">
          <FaCheck className="text-md text-green-300" />
          {dado.id === 4 ? "+" : ""}
          {dado.beneficios.contas} account{dado.id === 1 ? "" : "s"}
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-md text-green-300" />
          {dado.beneficios.customizacao ? "Customizable" : ""}
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-md text-green-300" />
          {dado.beneficios.alertas ? "Get alerts of invoices" : ""}
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-md text-green-300" />
          {dado.beneficios.historico} days history
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-md text-green-300" />
          {dado.beneficios.previsao} days forecast
        </li>
        <li className="flex items-center gap-2">
          {dado.beneficios.aplicativo ? (
            <FaCheck className="text-md text-green-300" />
          ) : (
            <FaTimes className="text-md text-red-300" />
          )}
          Mobile app
        </li>
        <li className="flex items-center gap-2">
          {dado.beneficios.temporeal ? (
            <FaCheck className="text-md text-green-300" />
          ) : (
            <FaTimes className="text-md text-red-300" />
          )}
          Realtime atualization
        </li>
      </ul>
      <button className="flex items-center justify-between px-4 py-2 rounded-md border-[1px] border-white hover:opacity-75 transition-all dark:hover:bg-white dark:hover:text-black dark:hover:font-semibold absolute bottom-8 bg-neutral-800 dark:bg-transparent text-white">
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

  const {toggleColorMode} = useColorMode()

  return (
    <main className="select-none snap-y snap-proximity scroll-smooth dark:bg-black">
      <Header />
      <div
        className="h-dvh w-full xl:px-20 flex xl:flex-row flex-col items-center xl:justify-between justify-center xl:py-0 px-10 gap-12 xl:gap-0 snap-start relative"
        ref={section1}
      >
        <Image
          src={mockup}
          alt="Phone"
          sizes="50%"
          className="xl:h-[65%] xl:w-1/2 object-contain xl:object-left h-1/3 w-full"
          quality={100}
          placeholder="empty"
          decoding="sync"
          priority
          onClick={toggleColorMode}
        />
        <h1 className="xl:text-7xl font-bold xl:w-1/2 w-full text-5xl dark:text-white text-neutral-800">
          A new way to manage your bills
        </h1>
        <BsChevronCompactDown
          className="dark:text-white text-neutral-800 animate-pulse cursor-pointer text-4xl absolute bottom-3 left-1/2 -translate-x-1/2 flex"
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
        className="h-dvh w-full xl:px-20 flex items-center xl:justify-between xl:flex-row flex-col relative justify-center snap-start px-10 gap-6 xl:gap-0"
        ref={section2}
      >
        <h1 className="xl:text-7xl font-bold xl:w-1/2 text-5xl w-full dark:text-white text-neutral-800">
          Have as much control as possible over your bills
        </h1>
        <div className="xl:w-2/5 flex flex-col items-left gap-4 justify-center ">
          <p className="dark:text-white text-neutral-800 font-normal">
            With the <i>Eloquent&trade;</i> you have control over your
            individual and shared expenses with accurate forecasts.
          </p>
          <button
            onClick={() =>
              window.scrollTo({
                top: (section3.current as HTMLDivElement).offsetTop,
                left: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center justify-between px-4 xl:w-[30%] w-fit pr-6 py-2 rounded-md border-[1px] dark:border-white border-neutral-800 dark:text-white text-neutral-800 dark:font-normal font-medium xl:hover:brightness-125 xl:hover:opacity-75 hover:bg-white hover:text-black hover:font-semibold transition-all group"
          >
            See prices{" "}
            <BsChevronRight className="group-hover:translate-x-2 transition-all" />
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
        className="xl:h-dvh min-h-dvh w-full xl:px-20 px-10 py-20 flex items-center justify-center gap-12 snap-end relative flex-col"
        ref={section3}
      >
        <h1 className="font-bold text-4xl dark:text-white text-neutral-800">
          Select the best offer for your use.
        </h1>
        <div className="h-full w-full flex items-center justify-center xl:flex-row flex-col gap-12">
          {dados.map((dado, index) => (
            <CardPrices key={index++} dado={dado} />
          ))}
        </div>
      </div>
      <div
        className="h-dvh w-full xl:px-20 px-10 py-32 flex items-center justify-start gap-12 snap-end overflow-y-clip relative flex-col"
        ref={section4}
      >
        <h1 className="text-5xl font-bold dark:text-white text-neutral-800">
          Stop stressing about the bills and leave it to us.
        </h1>
        <button className="flex items-center justify-between px-4 py-2 rounded-md border-[1px] dark:border-white border-neutral-800 text-neutral-800 dark:text-white hover:opacity-75 transition-all dark:hover:bg-white dark:hover:text-black dark:hover:font-semibold">
          Get started now
        </button>
        <Image
          src={mockupfront}
          alt="Phone"
          sizes="50%"
          quality={100}
          placeholder="blur"
          priority
          className="absolute -bottom-60 z-[3] xl:w-[70%] object-contain xl:h-[85%] h-[60%]"
        />
        <div className="xl:w-[1000px] xl:h-[1000px] absolute xl:-bottom-[130vh] z-[2] bg-neutral-400 dark:bg-[#171717] rounded-full size-[350px] -bottom-[25vh]"></div>
      </div>
    </main>
  );
}
