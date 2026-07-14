import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return <section className={`card ${className}`}>{children}</section>;
};

export default Card;
