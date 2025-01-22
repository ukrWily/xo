import { Header } from "../components/header";
import { GameTitle } from "../components/game/game-title";
import { GameInfo } from "../components/game/game-info";
import { GameField } from "../components/game/game-field";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <GameInfo className="mt-4" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
}
