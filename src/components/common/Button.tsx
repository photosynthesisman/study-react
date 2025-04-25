// src/components/Button/Button.tsx
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  ...props
}) => {
  const buttonClasses = ["button", `button-${variant}`, `button-${size}`, fullWidth ? "button-full-width" : "", className].filter(Boolean).join(" ");

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {leftIcon && <span className="button-icon button-icon-left">{leftIcon}</span>}
      <span className="button-text">{children}</span>
      {rightIcon && <span className="button-icon button-icon-right">{rightIcon}</span>}
    </button>
  );
};

export default Button;
