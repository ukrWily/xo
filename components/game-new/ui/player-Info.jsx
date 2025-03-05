import { GameSymbol } from "./game-symbol";
import clsx from "clsx";
import Image from "next/image";

export const PlayerInfo = ({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,
  seconds,
}) => {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger && "text-orange-500";
    }

    return "text-slate-200";
  };
  return (
    <div
      className={clsx(
        "flex gap-3 items-center shadow-[2px_2px_5px_rgba(0,0,0,.3)] rounded-lg px-4 py-2",
        isTimerRunning && "shadow-[3px_3px_7px_rgba(0,100,50,.5)]"
      )}
    >
      <div className={clsx("relative", isRight && "order-3")}>
        <div className={"text-teal-600 flex items-center gap-2 text-start"}>
          <Image src={avatar} alt="Photo" className="rounded-full w-12 h-12" />
          <div className="overflow-hidden">
            {/* truncate - cut a long word */}
            <div className=" text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Rating: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center flex justify-center">
          <GameSymbol symbol={symbol} className="w-4 h-4" />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          " text-lg font-semibold w-[60px] text-center",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
};
