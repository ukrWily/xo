import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ symbol, isWinner, onClick }) {
  return (
    <button
      className={clsx(
        "border-4 flex items-center justify-center bg-transparent shadow-[2px_2px_1px_rgba(0,0,0,0.9)] -ml-px mr-0 -mt-px mb-0 rounded-[1px] border-solid border-gray-300",
        isWinner && "bg-red-400"
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
