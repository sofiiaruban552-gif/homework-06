import { Store, ShoppingCart } from "lucide-react";
import Button from "../shared/Button";

import useCartStore from "../../store/useCartStore";

const Header = () => {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.qty, 0),
  );

  const hasItemsInCart = totalItems > 0;

  return (
    <header className="header">
      <div className="header__logo">
        <Store size={28} />
        <span>My Store</span>
      </div>

      <div className="header__cart-wrapper">
        <Button icon={ShoppingCart} className="header__cart" />

        {hasItemsInCart && (
          <span className="header__cart-badge">{totalItems}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
