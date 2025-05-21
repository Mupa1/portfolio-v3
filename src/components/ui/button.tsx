import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500  dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900 inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm outline-none transition-all focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50 shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive:
          "bg-red-500 text-neutral-100 shadow-sm hover:bg-red-500/90 focus-visible:ring-red-500/20 dark:bg-red-500/60 dark:hover:bg-red-900/90 dark:dark:focus-visible:ring-red-900/40 dark:focus-visible:ring-red-500/40",
        outline:
          "border bg-neutral-100 shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-200 dark:dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "!p-0 hover:text-neutral-900 dark:hover:text-neutral-50",
        link: "text-neutral-900 dark:text-neutral-50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
