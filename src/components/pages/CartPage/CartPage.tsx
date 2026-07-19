import { ArrowLeft } from "lucide-react";
import { useShallow } from "zustand/shallow";
import type { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
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

  const PULSE_DURATION = 300;

  const handleClearCart = () => {
    setTimeout(() => {
      clearCart();
    }, PULSE_DURATION);
  };

  const handleCheckout = () => {
    setTimeout(() => {
      navigate(ROUTES.CHECKOUT);
    }, PULSE_DURATION);
  };

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Card className="cart">
      <Button icon={ArrowLeft} onClick={handleGoHome} className="cart__btn">
        Back To Home
      </Button>

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
              <Button pulse onClick={handleClearCart}>
                Clear Cart
              </Button>
              <Button pulse className="btn--success" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default CartPage;
