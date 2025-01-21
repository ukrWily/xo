import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UIButton } from "../uikit/ui-button";

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      <div className="flex">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl font-bold leading-tight">
            Move: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
            Next: <CrossIcon />
          </div>
        </div>

        <UIButton size="md" variant="primary">
          Draw
        </UIButton>
        <UIButton size="md" variant="outline">
          Surrender
        </UIButton>
      </div>
    </div>
  );
}
