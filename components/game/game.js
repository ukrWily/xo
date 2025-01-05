import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import styles from "./game.module.css";

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
    <div className={styles["game"]}>
      <GameInfo
        currentStep={currentStep}
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
      />
      <div className={styles["game-field"]}>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className={styles["reset"]} onClick={handleReset}>
        reset
      </button>
    </div>
  );
}
