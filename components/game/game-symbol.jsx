import { SYMBOL_O, SYMBOL_X } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-[red]";
    if (symbol === SYMBOL_X) return "text-[blue]";
    return "";
  };
  return (
    <span className={`text-2xl leading-7 ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}
