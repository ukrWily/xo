import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-500 hover:shadow-2xl transition-all"
    >
      <ArrowLeftIcon />
      Main
    </Link>
  );
}
