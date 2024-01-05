import { cva } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: "bg-primary-2 text-light-1 hover:bg-primary-1/80",
      secondary: "text-light-1 bg-transparent hover:bg-light-1 hover:text-primary-1 border",
      white: "bg-light-1 text-primary-1 hover:bg-light-2",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-sm py-2 md:text-base px-4",
      large: "text-lg py-2 px-6 md:py-4 md:px-16",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Button = ({ className, intent, label, size, ...props }) => (
  <button
    aria-label={label}
    className={`${button({
      intent,
      size,
      className,
    })} relative flex items-center justify-center font-light transition-all duration-300 shadow-sm cursor-pointer w-max`}
    {...props}
  />
);

export default Button;
