import Image from "next/image";

import logo from "./logo.svg";
import { Profile } from "../profile/profile";
import { ArrowDownIcon } from "./arrow-down-icon";
import { UIButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="bg-white h-[100px] flex items-center p-8 shadow-lg">
      <Image src={logo} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UIButton className="w-44" size="lg" variant="primary">
        Play
      </UIButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="John Smith" rating="1230" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
