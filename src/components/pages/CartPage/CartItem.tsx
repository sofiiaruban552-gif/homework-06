import { Minus, Plus, Trash2 } from "lucide-react";
import { useShallow } from "zustand/shallow";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";

import type { CartItem as CartItemType } from "@/types/product";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { id, title, qty } = item;

  const { incrementQty, decrementQty, removeFromCart } = useCartStore(
    useShallow((state) => ({
      incrementQty: state.incrementQty,
      decrementQty: state.decrementQty,
      removeFromCart: state.removeFromCart,
    })),
  );

  const handleDecrease = () => decrementQty(id);
  const handleIncrease = () => incrementQty(id);
  const handleRemove = () => removeFromCart(id);

  return (
    <article className="cart-item">
      <h3 className="cart-item__title">{title}</h3>

      <div className="cart-item__actions">
        <Button
          icon={Minus}
          className="cart-item__btn"
          onClick={handleDecrease}
        />

        <span className="cart-item__quantity">{qty}</span>

        <Button
          icon={Plus}
          className="cart-item__btn"
          onClick={handleIncrease}
        />

        <Button
          icon={Trash2}
          className="cart-item__remove"
          onClick={handleRemove}
        />
      </div>
    </article>
  );
};

export default CartItem;
