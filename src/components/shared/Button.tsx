import { useState } from "react";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  children?: ReactNode;
  pulse?: boolean;
}

const Button = ({
  onClick,
  icon: Icon,
  children,
  className = "",
  disabled = false,
  pulse = false,
  ...props
}: ButtonProps) => {
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (pulse) {
      setIsPulsing(false);

      requestAnimationFrame(() => {
        setIsPulsing(true);
      });
    }

    onClick?.(event);
  };

  return (
    <button
      {...props}
      className={clsx("btn", className, {
        "btn--pulse": pulse && isPulsing,
      })}
      disabled={disabled}
      onClick={handleClick}
      onAnimationEnd={() => setIsPulsing(false)}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
