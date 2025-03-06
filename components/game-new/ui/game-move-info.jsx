import React from "react";
import { GameSymbol } from "./game-symbol";
import { currentMove, nextMove } from "../model/use-game-state";

export function GameMoveInfo() {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-bold leading-tight">
        Move: <GameSymbol symbol={currentMove} className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
        Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
