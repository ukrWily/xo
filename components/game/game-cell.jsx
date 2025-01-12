import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ symbol, isWinner, onClick }) {
  return (
    <button
      className={clsx(
        "border-4 flex items-center justify-center shadow-[2px_2px_3px_rgba(0,0,0,0.4)]  -ml-px mr-0 -mt-px mb-0 rounded-[5px] border-solid border-gray-200 hover:scale-105 transition-transform duration-300 hover:shadow-[2px_2px_3px_rgba(0,100,0,0.5)] hover:border-[rgba(0,100,0,0.1)]",
        isWinner && "bg-yellow-200"
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
