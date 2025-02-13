import clsx from "clsx";
import { Profile } from "../profile/profile";
import { CrossIcon } from "../game/icons/cross-icon";
import { ZeroIcon } from "../game/icons/zero-icon";
import { GameSymbol } from "./game-symbol";

import avatarSrc1 from "../game/images/avatar-1.png";
import avatarSrc2 from "../game/images/avatar-2.png";
import avatarSrc3 from "../game/images/avatar-3.png";
import avatarSrc4 from "../game/images/avatar-4.png";
import { useState, useEffect } from "react";

const players = [
  {
    id: 1,
    name: "John Smith",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: "cross",
  },
  {
    id: 2,
    name: "Jane Doengimone",
    rating: 1230,
    avatar: avatarSrc2,
    symbol: "zero",
  },
  {
    id: 3,
    name: "Lara Croft",
    rating: 1230,
    avatar: avatarSrc3,
    symbol: "triangle",
  },
  {
    id: 4,
    name: "James Bond",
    rating: 1230,
    avatar: avatarSrc4,
    symbol: "square",
  },
];

export function GameInfo({ className, playersCount, currentMove }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-4 py-2 grid grid-cols-2 gap-3 justify-between"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(60);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;
  let interval;

  useEffect(() => {
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setSeconds(60);
    };
  }, [isTimerRunning]);

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
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center flex justify-center">
          <GameSymbol symbol={playerInfo.symbol} className="w-4 h-4" />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold w-[60px] text-center",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
