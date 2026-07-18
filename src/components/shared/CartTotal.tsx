import { type ReactElement } from "react";

import useCartStore from "@/store/useCartStore";

const CartTotal = (): ReactElement => {
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <span key={totalPrice} className="cart__total cart__total--updating">
      Total: ${totalPrice.toFixed(2)}
    </span>
  );
};

export default CartTotal;
