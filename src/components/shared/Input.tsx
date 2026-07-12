import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const Input = ({
  icon: Icon,
  error,
  className = "",
  inputClassName = "",
  iconClassName = "",
  ...props
}: InputProps) => (
  <div className={`input ${className}`}>
    {Icon && <Icon size={20} className={`input__icon ${iconClassName}`} />}

    <input
      {...props}
      className={`input__field ${
        error ? "input__field--error" : ""
      } ${inputClassName}`}
    />

    {error && <span className="input__error">{error}</span>}
  </div>
);

export default Input;
