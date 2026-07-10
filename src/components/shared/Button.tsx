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
}: ButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
