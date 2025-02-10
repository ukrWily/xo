import Image from "next/image";
import avatarSrc from "./photo.png";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        "text-teal-600 flex items-center gap-2 text-start",
        className
      )}
    >
      <Image src={avatar} alt="Photo" className="rounded-full w-12 h-12" />
      <div className="overflow-hidden">
        {/* truncate - cut a long word */}
        <div className=" text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating: {rating}
        </div>
      </div>
    </div>
  );
}
