import Button from "@/components/shared/Button";
import { LoaderCircle } from "lucide-react";

interface ProductStateProps {
  isLoading: boolean;
  error: string | null;
  isEmpty: boolean;
  onRetry: () => void;
}

const ProductState = ({
  isLoading,
  error,
  isEmpty,
  onRetry,
}: ProductStateProps) => {
  if (isLoading) {
    return <LoaderCircle className="product-state__spinner" />;
  }

  if (error) {
    return (
      <>
        <p className="text">{error}</p>
        <Button onClick={onRetry}>Try again</Button>
      </>
    );
  }

  if (isEmpty) {
    return <p className="text">No products found.</p>;
  }

  return null;
};

export default ProductState;
