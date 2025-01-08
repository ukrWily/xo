export function ResetButton({ onClick }) {
  return (
    <button
      className="
        cursor-pointer 
        bg-[#993f50] 
        px-2 py-0.1 text-[white] 
        shadow-[2px_2px_3px_rgba(0,0,0,0.6)] 
        mt-5 rounded-[5px] 
        hover:bg-[#d0566c95] 
        hover:shadow-[1px_1px_2px_rgba(0,0,0,0.6)] 
        active:bg-[#e70c0c] 
        active:shadow-[1px_1px_1px_rgba(0,0,0,0.6) ;"
      onClick={onClick}
    >
      reset
    </button>
  );
}
