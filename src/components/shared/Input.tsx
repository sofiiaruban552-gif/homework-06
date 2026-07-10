import type { ChangeEvent } from "react";
import type { LucideIcon } from "lucide-react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "search" | "tel";
  icon?: LucideIcon;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  icon: Icon,
  className = "",
  inputClassName = "",
  iconClassName = "",
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`input ${className}`}>
      {Icon && <Icon size={20} className={`input__icon ${iconClassName}`} />}

      <input
        className={`input__field ${inputClassName}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
