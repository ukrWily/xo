import clsx from "clsx";

/**
 * UIButton component renders a styled button with different sizes and variants.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {'md' | 'lg'} props.size - The size of the button. Can be 'md' (medium) or 'lg' (large).
 * @param {'primary' | 'outline'} props.variant - The variant of the button. Can be 'primary' or 'outline'.
 * @returns {JSX.Element} The rendered button component.
 */

export function UIButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "text-sm leading-tight px-6 rounded py-2",
      lg: "text-2xl leading-tight px-5 rounded-md py-2",
    }[size],
    {
      primary:
        " [text-shadow:_1px_1px_1px_rgba(0,0,0,0.9)] bg-teal-600 text-white hover:bg-teal-500 hover:shadow-[0_5px_5px_rgba(0,0,0,0.5)] active::shadow-[0_1px_1px_rgba(0,0,0,0.5)] active:scale-90  ",
      outline:
        "border border-teal-600 text-teal-600 hover:bg-teal-50  hover:shadow-[0_5px_5px_rgba(0,0,0,0.5)] active::shadow-[0_0_0_rgba(0,0,0,0.1)] active:scale-90  ",
    }[variant]
  );

  return <button className={buttonClassName}>{children}</button>;
}
