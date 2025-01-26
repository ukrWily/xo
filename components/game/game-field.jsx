import clsx from "clsx";
import { UIButton } from "../uikit/ui-button";
import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./game-symbol";

const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex % MOVE_ORDER.length];
  //  or
  // return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({ className }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS);
  const nexMove = getNextMove(currentMove);

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
        nextMove={nexMove}
      />
      <GameGrid>
        {cells.map((_, index) => (
          <GameCell key={index}></GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children }) {
  return (
    <button className="border border-slate-200 rounded hover:border-teal-300 transition-transform grid place-items-center">
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
