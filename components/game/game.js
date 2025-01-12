import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { ResetButton } from "./reset-button";
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleReset,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div
      className="flex flex-col items-center w-[200px] shadow-[2px_2px_7px_rgba(0,0,0,0.4)] mx-auto my-[100px] pb-[30px] p-5 rounded-[15px]  bg-[#ffffff]
  font-family: Arial, Helvetica, sans-serif"
    >
      <GameInfo
        currentStep={currentStep}
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
      />
      <div className="grid grid-cols-[repeat(3,40px)] grid-rows-[repeat(3,40px)] gap-1">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetButton onClick={handleReset} />
    </div>
  );
}
