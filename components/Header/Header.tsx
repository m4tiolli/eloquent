import Image from "next/image";
import LoginButton from "./Login.Button";
import RegisterButton from "./Register.Button";

export default function Header() {
  return (
    <div className="w-full fixed z-10 top-0 px-4 h-[10dvh] backdrop-blur flex items-center justify-between">
      <div className="w-1/3">
        <Image
          src={"/icon.png"}
          alt="Logo Eloquent"
          width={50}
          height={50}
          priority
        />
      </div>
      <div className="w-1/3 flex items-center justify-end gap-4">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
}
