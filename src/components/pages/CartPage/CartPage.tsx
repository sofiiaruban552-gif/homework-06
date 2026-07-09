import { useShallow } from "zustand/shallow";
import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/routes";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";
import CartItem from "./CartItem";

const CartPage = (): ReactElement => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      clearCart: state.clearCart,
    })),
  );

  const isEmpty = items.length === 0;

  const totalPrice = items
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  const handleClearCart = () => {
    clearCart();
    navigate(ROUTES.HOME);
  };

  return (
    <section className="cart">
      <h2 className="cart__title">Shopping Cart</h2>

      {isEmpty ? (
        <p className="cart__empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart__items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart__footer">
            <span className="cart__total">Total: ${totalPrice}</span>

            <Button className="cart__clear-btn" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
