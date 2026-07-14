import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";
import useCartStore from "@/store/useCartStore";

import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import Rating from "@/components/shared/Rating";
import ProductState from "@/components/shared/ProductState";

import type { Product } from "@/types/product";

const API_URL = "https://dummyjson.com/products/";

const ProductPage = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useFetch<Product>(id ? `${API_URL}${id}` : "");

  const addToCart = useCartStore((state) => state.addToCart);

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

  const { title, price, rating, thumbnail, description } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="product-page">
      <div className="flex-center product-page__image-wrapper">
        <img className="product-page__image" src={thumbnail} alt={title} />
      </div>

      <div className="flex-column product-page__content">
        <h1 className="title">{title}</h1>

        <Rating rating={rating} />

        <p className="text">{description}</p>

        <div className="flex-between product-page__footer">
          <span className="product-page__price">${price}</span>

          <Button icon={ShoppingCart} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductPage;
