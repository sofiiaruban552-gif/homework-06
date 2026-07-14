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
    <article className="flex-between cart-item">
      <h2 className="subtitle">{title}</h2>

      <div className="cart-item__actions">
        <Button
          icon={Minus}
          className="btn btn--icon"
          onClick={handleDecrease}
        />

        <span className="cart-item__quantity">{qty}</span>

        <Button
          icon={Plus}
          className="btn btn--icon"
          onClick={handleIncrease}
        />

        <Button
          icon={Trash2}
          className="btn btn--icon"
          onClick={handleRemove}
        />
      </div>
    </article>
  );
};

export default CartItem;
