import { useState } from "react";
import { MOVE_ORDER } from "./constants";
import { GAME_SYMBOLS } from "./constants";

function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  // return slicedMoveOrder[nextMoveIndex % slicedMoveOrder.length];
  //  or
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function getSequenceIndexes(i) {
    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ];

    for (let j = 0; j < array.length; j++) {
      res[0].push();
      res[1].push();
      res[2].push();
      res[3].push();
    }
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
    }
  }
}

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell
        ),
      };
    });
  };

  return { cells, currentMove, handleCellClick, nextMove };
}
