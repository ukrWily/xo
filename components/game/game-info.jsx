import { GameSymbol } from "./game-symbol";
import styles from "./game.module.css";

export function GameInfo({ isDraw, currentStep, winnerSymbol }) {
  if (isDraw) {
    return <h3 className={styles[("game-info", "draw")]}>Draw</h3>;
  }

  if (winnerSymbol) {
    return (
      <div className={styles[("game-info", "win")]}>
        Winner: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={styles["game-info"]}>
      Next step: <GameSymbol symbol={currentStep} />
    </div>
  );
}
