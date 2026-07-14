import type { ReactElement } from "react";

import useCartStore from "@/store/useCartStore";

const CartTotal = (): ReactElement => {
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return <span className="cart__total">Total: ${totalPrice.toFixed(2)}</span>;
};

export default CartTotal;
