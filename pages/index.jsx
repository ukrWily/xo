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
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UIButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handlePlayerTimeOver,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-4 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <UiModal
          width="md"
          isOpen={!!winnerSymbol}
          onClose={() => console.log("close")}
        >
          <UiModal.Header>Game over</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Winner: <span className="text-teal-600">John Smith</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UIButton size="md" variant="outline">
              Return
            </UIButton>
            <UIButton size="md" variant="primary">
              Play again
            </UIButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          className="mt-6"
        />
      </main>
    </div>
  );
}
