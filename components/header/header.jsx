import Image from "next/image";

import logo from "./logo.svg";
import photo from "./photo.png";

export function Header() {
  return (
    <header className="bg-white h-[100px] flex items-center p-8 shadow-lg">
      <Image src={logo} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="bg-teal-600 w-44 py-2 rounded-md text-white font-bold hover:bg-teal-500 hover:shadow-[0_5px_5px_rgba(0,0,0,0.5)] active::shadow-[0_1px_1px_rgba(0,0,0,0.5)] active:scale-90 transition-all text-2xl leading-tight">
        Play
      </button>
      <button className="text-teal-600 ml-auto flex items-center gap-2 text-start hover:scale-105 hover:text-teal-500 transition-all">
        <Image src={photo} alt="Photo" className="rounded-full w-12 h-12" />
        <div>
          <div className=" text-lg leading-tight">John Doe</div>
          <div className="text-slate-400 text-xs leading-tight">
            Rating: 1230
          </div>
        </div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z"
            fill="#0D9488"
          />
        </svg>
      </button>
    </header>
  );
}
