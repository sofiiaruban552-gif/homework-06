import { Star, ShoppingCart } from "lucide-react";
import { useShallow } from "zustand/shallow";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, rating, thumbnail, id } = product;

  const { items, addToCart } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      addToCart: state.addToCart,
    })),
  );

  const cartItem = items.find((item) => item.id === id);
  const quantityInCart = cartItem?.qty ?? 0;
  const isInCart = quantityInCart > 0;

  const buttonText = isInCart ? `In cart (${quantityInCart})` : "Add to cart";

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img className="product-card__image" src={thumbnail} alt={title} />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__rating">
          <Star size={16} className="product-card__star" />
          <span>{rating}</span>
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">${price}</span>

          <Button
            icon={ShoppingCart}
            onClick={handleAddToCart}
            className={isInCart ? "product-card__btn--active" : ""}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
