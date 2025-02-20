import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-white pb-4 pt-12 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50", className)}
    {...props}
  />
));
Footer.displayName = "Footer";

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
      className,
    )}
    {...props}
  />
));
FooterContent.displayName = "FooterContent";

const FooterColumn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
));
FooterColumn.displayName = "FooterColumn";

const FooterBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-8 flex flex-col items-center justify-between gap-4 border-t pt-4 text-xs text-zinc-500 sm:flex-row dark:text-zinc-400",
      className,
    )}
    {...props}
  />
));
FooterBottom.displayName = "FooterBottom";

export { Footer, FooterColumn, FooterBottom, FooterContent };
