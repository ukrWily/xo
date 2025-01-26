import { CrossIcon } from "./icons/cross-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { GAME_SYMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  // Створюємо об'єкт, де ключами є значення з константи GAME_SYMBOLS,
  // а значеннями є відповідні компоненти іконок.
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon; // Використовуємо значення symbol як ключ для доступу до відповідної іконки.
  // Якщо symbol не знайдено в об'єкті, використовується CrossIcon за замовчуванням.

  // Повертаємо компонент іконки для відображення.
  return <Icon className={className} />;
}
