interface PriceProps {
  value: number;
  className?: string;
  currency?: string;
}

const Price = ({ value, className = "", currency = "$" }: PriceProps) => {
  return (
    <span className={`price ${className}`}>
      {currency} {value.toFixed(2)}
    </span>
  );
};

export default Price;
