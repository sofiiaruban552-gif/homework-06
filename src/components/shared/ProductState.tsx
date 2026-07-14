import Button from "@/components/shared/Button";

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
    return (
      <div className="product-state">
        <div className="product-state__spinner" />
        <p>
          Loading
          <span className="loading-dots" />
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-state">
        <p>{error}</p>

        <Button onClick={onRetry}>Try again</Button>
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="product-state">
        <p>No products found.</p>
      </div>
    );
  }

  return null;
};

export default ProductState;
