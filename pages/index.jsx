import { Header } from "../components/header";
import { GameTitle } from "../components/game/game-title";
import { GameInfo } from "../components/game/game-info";
import { GameField } from "../components/game/game-field";
import { useState } from "react";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(2);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-4 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className="mt-4" />
        <GameField playersCount={playersCount} className="mt-6" />
      </main>
    </div>
  );
}
