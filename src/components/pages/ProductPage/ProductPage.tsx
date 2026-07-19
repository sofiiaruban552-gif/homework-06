import { useEffect } from "react";
import { ArrowLeft, ShoppingCart, Tag } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";
import useCartStore from "@/store/useCartStore";

import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import Rating from "@/components/shared/Rating";
import Price from "@/components/shared/Price";
import ProductState from "@/components/shared/ProductState";

import type { Product } from "@/types/product";

const API_URL = "https://dummyjson.com/products/";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useFetch<Product>(id ? `${API_URL}${id}` : "");

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    document.title = product ? `${product.title} — My Store` : "My Store";
  }, [product]);

  if (isLoading || error || !product) {
    return (
      <ProductState
        isLoading={isLoading}
        error={error}
        isEmpty={!product && !isLoading && !error}
        onRetry={refetch}
      />
    );
  }

  const { title, price, rating, thumbnail, description, category, stock } =
    product;

  const isInStock = stock > 0;
  const stockLabel = isInStock ? "In Stock" : "Out of Stock";
  const stockClassName = isInStock ? "in-stock" : "out-of-stock";

  const handleGoBack = () => navigate(-1);

  const handleAddToCart = () => {
    if (!isInStock) return;

    addToCart(product);
  };

  return (
    <Card className="product-page">
      <div className="flex-center product-page__image-wrapper">
        <img className="product-page__image" src={thumbnail} alt={title} />
      </div>

      <div className="flex-column product-page__content">
        <Button
          icon={ArrowLeft}
          className="product-page__back"
          onClick={handleGoBack}
        >
          Back
        </Button>
        <h1 className="title">{title}</h1>

        <Rating rating={rating} />

        <span className="product-page__category">
          <Tag size={16} />
          {category}
        </span>

        <span className={stockClassName}>{stockLabel}</span>

        <p className="text">{description}</p>

        <div className="flex-between product-page__footer">
          <Price value={price} className="product-page__price" />

          <Button
            icon={ShoppingCart}
            onClick={handleAddToCart}
            disabled={!isInStock}
            pulse
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductPage;
