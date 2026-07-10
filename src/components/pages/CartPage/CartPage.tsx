import { useShallow } from "zustand/shallow";
import type { ReactElement } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/types/routes";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";
import CartItem from "./CartItem";

const CartPage = (): ReactElement => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      totalPrice: state.getTotalPrice(),
      clearCart: state.clearCart,
    })),
  );

  const isEmpty = items.length === 0;

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
            <span className="cart__total">Total: ${totalPrice.toFixed(2)}</span>

            <div className="cart__actions">
              <Button className="cart__clear-btn" onClick={handleClearCart}>
                Clear Cart
              </Button>
              <Link to={ROUTES.CHECKOUT}>
                <Button className="cart__checkout-btn">Checkout</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
