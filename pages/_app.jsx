import clsx from "clsx";
import "../styles/global.css";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />
    </div>
  );
}
