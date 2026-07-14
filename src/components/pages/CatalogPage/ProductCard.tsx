import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useShallow } from "zustand/shallow";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";
import Rating from "@/components/shared/Rating";

import type { Product } from "@/types/product";
import { ROUTES } from "@/types/routes";

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

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={ROUTES.product(id)} className="product-card">
      <article>
        <div className="product-card__image-wrapper">
          <img className="product-card__image" src={thumbnail} alt={title} />
        </div>

        <div className="flex-column product-card__content">
          <div className="product-card__title-wrapper">
            <h2 className="subtitle product-card__title">{title}</h2>

            <span className="product-card__tooltip">{title}</span>
          </div>

          <Rating rating={rating} />

          <div className="flex-between product-card__footer">
            <span className="product-card__price">$ {price}</span>

            <Button
              icon={ShoppingCart}
              onClick={handleAddToCart}
              className="btn"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
