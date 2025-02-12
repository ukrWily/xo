import { Header } from "../components/header";
// import {
//   GameTitle,
//   GameInfo,
//   GameField,
//   useGameState,
// } from "../components/game";
import { GameTitle } from "../components/game/game-title";
import { GameInfo } from "../components/game/game-info";
import { GameField } from "../components/game/game-field";
import { useGameState } from "../components/game/use-game-state";
import { useState } from "react";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);
  const { cells, currentMove, handleCellClick, nextMove } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-4 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className="mt-4" />
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          className="mt-6"
        />
      </main>
    </div>
  );
}
