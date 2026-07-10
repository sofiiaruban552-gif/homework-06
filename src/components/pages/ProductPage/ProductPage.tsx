import { ShoppingCart, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";

import useFetch from "@/hooks/useFetch";
import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";

import type { Product } from "@/types/product";

const API_URL = "https://dummyjson.com/products/";

const ProductPage = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useFetch<Product>(id ? `${API_URL}${id}` : "");

  const { addToCart } = useCartStore(
    useShallow((state) => ({
      addToCart: state.addToCart,
    })),
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return null;
  }

  const { title, price, rating, thumbnail, description } = product;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
      <article className="product-page">
        <div className="product-page__image-wrapper">
          <img className="product-page__image" src={thumbnail} alt={title} />
        </div>

        <div className="product-page__content">
          <h1 className="product-page__title">{title}</h1>

          <div className="product-page__rating">
            <Star size={18} className="product-page__star" />
            <span>{rating}</span>
          </div>

          <p className="product-page__description">{description}</p>

          <div className="product-page__footer">
            <span className="product-page__price">${price}</span>

            <Button icon={ShoppingCart} onClick={handleAddToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </article>
  );
};

export default ProductPage;
