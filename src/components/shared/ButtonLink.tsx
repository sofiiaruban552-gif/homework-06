import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./Button";

interface ButtonLinkProps {
  path: string;
  text: string;
  icon?: LucideIcon;
  className?: string;
}

const ButtonLink = ({ path, text, icon, className }: ButtonLinkProps) => {
  return (
    <Link to={path}>
      <Button icon={icon} className={className}>
        {text}
      </Button>
    </Link>
  );
};

export default ButtonLink;
