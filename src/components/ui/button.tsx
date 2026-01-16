import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:dark:aria-invalid:ring-destructive-dark/40 dark:aria-invalid:border-destructive-dark inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded text-sm outline-none transition-all focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-primary-400 dark:focus-visible:ring-offset-background-dark [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-sm hover:bg-foreground/90 dark:bg-foreground-dark dark:text-background-dark dark:hover:bg-foreground-dark/90",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive-dark focus-visible:ring-destructive/20 dark:bg-destructive/80 dark:hover:bg-destructive-dark dark:dark:focus-visible:ring-destructive-dark/40 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-border bg-background-muted shadow-sm hover:bg-background-muted hover:text-foreground dark:border-border-dark dark:dark:border-border-dark dark:bg-background-dark dark:hover:bg-background-dark-muted dark:hover:text-foreground-dark",
        secondary:
          "bg-background-muted text-foreground shadow-sm hover:bg-background-muted/80 dark:bg-background-dark-muted dark:text-foreground-dark dark:hover:bg-background-dark-muted/80",
        ghost: "!p-0 hover:text-foreground dark:hover:text-foreground-dark",
        link: "text-foreground dark:text-foreground-dark",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded px-6 has-[>svg]:px-4",
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
