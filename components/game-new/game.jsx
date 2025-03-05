import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-Info";
import { PLAYERS } from "./constants";

export function Game() {
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
    />
  );
}
