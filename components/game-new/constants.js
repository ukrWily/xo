import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "John Smith",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: "cross",
  },
  {
    id: 2,
    name: "Jane Doengimone",
    rating: 1230,
    avatar: avatarSrc2,
    symbol: "zero",
  },
  {
    id: 3,
    name: "Lara Croft",
    rating: 1230,
    avatar: avatarSrc3,
    symbol: "triangle",
  },
  {
    id: 4,
    name: "James Bond",
    rating: 1230,
    avatar: avatarSrc4,
    symbol: "square",
  },
];
