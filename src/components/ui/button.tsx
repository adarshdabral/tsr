import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        luxury: "bg-[hsl(38_60%_50%)] text-[hsl(40_33%_98%)] hover:bg-[hsl(35_50%_35%)] tracking-widest uppercase text-xs font-sans shadow-[0_20px_60px_-20px_hsla(25,30%,15%,0.2)] hover:shadow-[0_0_40px_hsla(38,60%,50%,0.2)]",
        luxuryOutline: "border-2 border-[hsl(38_60%_50%)] text-[hsl(38_60%_50%)] hover:bg-[hsl(38_60%_50%)] hover:text-[hsl(40_33%_98%)] tracking-widest uppercase text-xs font-sans transition-all duration-700",
        hero: "bg-[hsl(40_33%_98%)/0.9] text-[hsl(25_35%_15%)] hover:bg-[hsl(40_33%_98%)] tracking-[0.2em] uppercase text-xs font-sans backdrop-blur-sm border border-[hsl(38_35%_80%)/0.5] shadow-[0_20px_60px_-20px_hsla(25,30%,15%,0.2)]",
        elegant: "bg-transparent text-foreground border-b border-[hsl(38_60%_50%)] hover:border-[hsl(40_45%_75%)] tracking-widest uppercase text-xs font-sans",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "h-14 px-12 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
