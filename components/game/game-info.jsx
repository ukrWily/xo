import { GameSymbol } from "./game-symbol";

export function GameInfo({ isDraw, currentStep, winnerSymbol }) {
  if (isDraw) {
    return (
      <h3
        className="mb-2.5 text-3xl text-[yellow] mb-2.5;
  text-shadow: 3px 3px 1px #000;"
      >
        Draw
      </h3>
    );
  }

  if (winnerSymbol) {
    return (
      <div className="mb-2.5 text-3xl text-[aliceblue] mb-2.5 drop-shadow-[1px_1px_1px_rgba(235,0,0,0.5)]">
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className=" mb-2.5">
      Next step: <GameSymbol symbol={currentStep} />
    </div>
  );
}
