import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps {
  onClick?: () => void;
  icon?: LucideIcon;
  children?: ReactNode;
  className?: string;
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
