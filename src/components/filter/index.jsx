import { cva } from "class-variance-authority";

const filter = cva("filter", {
  variants: {
    intent: {
      primary: "bg-filter-2",
      secondary: "bg-black/60",
      "card-team": "filter-card-team",
      default: "bg-filter-1",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

const Filter = ({ intent, className, ...props }) => {
  return (
    <div
      className={`${filter({
        intent,
        className,
      })} absolute left-0 top-0 w-full h-full`}
      {...props}
    />
  );
};

export default Filter;
