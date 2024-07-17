import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full px-4 h-[10dvh] bg-[#ffffff70] flex items-center justify-center">
      <div className="w-1/3">
        <Image
          src={"/icon.png"}
          alt="Logo Eloquent"
          width={50}
          height={50}
          priority
        />
      </div>
      <div className="w-1/3">
        <h1>Header</h1>
      </div>
      <div className="w-1/3">
        <h1>Buttons</h1>
      </div>
    </div>
  );
}
