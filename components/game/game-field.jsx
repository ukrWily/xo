import clsx from "clsx";
import { UIButton } from "../uikit/ui-button";
import { use, useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className }) {
  const { cells, currentMove, handleCellClick, nextMove } = useGameState();

  const actions = (
    <>
      <UIButton size="md" variant="primary">
        Draw
      </UIButton>
      <UIButton size="md" variant="outline">
        Surrender
      </UIButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-4 h-4" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 rounded hover:border-teal-300 transition-transform grid place-items-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-bold leading-tight">
          Move: <GameSymbol symbol={currentMove} className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
          Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-3">
      {children}
    </div>
  );
}
