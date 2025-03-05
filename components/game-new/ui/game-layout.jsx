export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-4 py-2 grid grid-cols-2 gap-3 justify-between"
        }
      >
        {playersList}
      </div>
    </div>
  );
}
