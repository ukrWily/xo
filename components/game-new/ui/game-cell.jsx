import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameCell({ symbol, onClick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 rounded hover:border-teal-300 transition-transform grid place-items-center",
        isWinner && "bg-red-400/30"
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-4 h-4" />}
    </button>
  );
}
