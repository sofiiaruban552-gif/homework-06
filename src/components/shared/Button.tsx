import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  children?: ReactNode;
}

const Button = ({
  onClick,
  icon: Icon,
  children,
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
