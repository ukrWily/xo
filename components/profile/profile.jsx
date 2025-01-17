import Image from "next/image";
import photo from "./photo.png";

export function Profile() {
  return (
    <div className="text-teal-600 flex items-center gap-2 text-start mt-4">
      <Image src={photo} alt="Photo" className="rounded-full w-12 h-12" />
      <div>
        <div className=" text-lg leading-tight">John Doe</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
      </div>
    </div>
  );
}
