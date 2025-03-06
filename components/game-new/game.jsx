import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-Info";
import { PLAYERS } from "./constants";
import { useGameState } from "./model/use-game-state";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";

const PLAYERS_COUNT = 4;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatingGame playersCount={4} timeMode={"1 min per step"} />
      }
      playersList={PLAYERS.map((player, index) => (
        <PlayerInfo
          key={player.id}
          name={player.name}
          rating={player.rating}
          avatar={player.avatar}
          symbol={player.symbol}
          isRight={index % 2 === 0}
          seconds={60}
        />
      ))}
      gameMoveInfo={
        <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
      }
      gameCells={cells.map((cell, index) => (
        // <GameCell key={index} index={index} symbol={cell} />
        <GameCell
          key={index}
          isWinner={winnerSequence?.includes(index)}
          disabled={!!winnerSymbol}
          onClick={() => {
            handleCellClick(index);
          }}
          symbol={cell}
        ></GameCell>
      ))}
    />
  );
}
