import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50 disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[11px] gap-1.5",
    md: "px-5 py-2.5 text-xs gap-2",
    lg: "px-7 py-3.5 text-xs font-semibold gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-foreground text-background font-medium hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-[0.98]",
    secondary:
      "bg-surface-100 text-foreground border border-border-medium hover:bg-surface-200 hover:border-border-glow active:scale-[0.98]",
    outline:
      "bg-transparent text-foreground border border-border-medium hover:border-accent-cyan/60 hover:bg-accent-cyan/5 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-400 hover:text-foreground hover:bg-white/[0.04]",
  };

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
