import Image from "next/image";

import logo from "./logo.svg";
import { Profile } from "../profile/profile";
import { ArrowDownIcon } from "./arrow-down-icon";

export function Header() {
  return (
    <header className="bg-white h-[100px] flex items-center p-8 shadow-lg">
      <Image src={logo} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="bg-teal-600 w-44 py-2 rounded-md text-white font-bold hover:bg-teal-500 hover:shadow-[0_5px_5px_rgba(0,0,0,0.5)] active::shadow-[0_1px_1px_rgba(0,0,0,0.5)] active:scale-90 transition-all text-2xl leading-tight">
        Play
      </button>
      <button className="text-teal-600 ml-auto flex items-center gap-2 text-start hover:scale-105 hover:text-teal-500 transition-all">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
