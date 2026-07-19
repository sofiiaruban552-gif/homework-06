import { useState } from "react";
import clsx from "clsx";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useShallow } from "zustand/shallow";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";

import type { CartItem as CartItemType } from "@/types/product";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { id, title, qty, thumbnail } = item;

  const [isRemoving, setIsRemoving] = useState(false);

  const { incrementQty, decrementQty, removeFromCart } = useCartStore(
    useShallow((state) => ({
      incrementQty: state.incrementQty,
      decrementQty: state.decrementQty,
      removeFromCart: state.removeFromCart,
    })),
  );

  const handleDecrease = () => decrementQty(id);
  const handleIncrease = () => incrementQty(id);

  const handleRemove = () => {
    setIsRemoving(true);
  };

  const handleTransitionEnd = () => {
    if (isRemoving) {
      removeFromCart(id);
    }
  };

  return (
    <article
      className={clsx("flex-between cart-item", {
        "cart-item--removing": isRemoving,
      })}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="cart-item__info">
        <img className="cart-item__image" src={thumbnail} alt={title} />

        <h2 className="subtitle">{title}</h2>
      </div>

      <div className="cart-item__actions">
        <Button
          icon={Minus}
          className="btn--icon"
          onClick={handleDecrease}
          disabled={isRemoving}
        />

        <span className="cart-item__quantity">{qty}</span>

        <Button
          icon={Plus}
          className="btn--icon"
          onClick={handleIncrease}
          disabled={isRemoving}
        />

        <Button
          icon={Trash2}
          className="btn--icon"
          onClick={handleRemove}
          disabled={isRemoving}
        />
      </div>
    </article>
  );
};

export default CartItem;
