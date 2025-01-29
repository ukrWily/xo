import { useState } from "react";
import { MOVE_ORDER } from "./constants";
import { GAME_SYMBOLS } from "./constants";

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex % MOVE_ORDER.length];
  //  or
  // return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nexMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => ({
      ...lastGameState,
      currentMove: getNextMove(lastGameState.currentMove),
      cells: lastGameState.cells.map((cell, i) =>
        i === index ? lastGameState.currentMove : cell
      ),
    }));
  };

  return { cells, currentMove, handleCellClick, nexMove };
}
