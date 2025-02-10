import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { HistoryIcon } from "./icons/history-icon";
import { UserIcon } from "./icons/players-icon";
import { StarIcon } from "./icons/star-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-500 hover:shadow-2xl transition-all"
      >
        <ArrowLeftIcon />
        Main
      </Link>
      <h1 className="text-4xl leading-tight">Tic Tac Toe</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> 1 min per move
        </div>
      </div>
    </div>
  );
}
