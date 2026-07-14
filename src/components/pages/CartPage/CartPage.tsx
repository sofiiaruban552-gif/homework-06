import { useShallow } from "zustand/shallow";
import type { ReactElement } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/types/routes";

import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";
import CartItem from "./CartItem";
import CartTotal from "@/components/shared/CartTotal";
import Card from "@/components/shared/Card";

const CartPage = (): ReactElement => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      clearCart: state.clearCart,
    })),
  );

  const isEmpty = items.length === 0;

  const handleClearCart = () => {
    clearCart();
    navigate(ROUTES.HOME);
  };

  return (
    <Card className="cart">
      <h2 className="title">Shopping Cart</h2>

      {isEmpty ? (
        <p className="text">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart__items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="flex-between cart__footer">
            <CartTotal />
            <div className="cart__actions">
              <Button className="btn" onClick={handleClearCart}>
                Clear Cart
              </Button>
              <Link to={ROUTES.CHECKOUT}>
                <Button className="btn btn--success">Checkout</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default CartPage;
