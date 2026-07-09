import { Store, ShoppingCart } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../shared/Button";
import { ROUTES } from "@/types/routes";

import useCartStore from "../../store/useCartStore";

const Header = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate(ROUTES.CART);
  };

  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.qty, 0),
  );

  const hasItemsInCart = totalItems > 0;

  return (
    <header className="header">
      <Link to={ROUTES.HOME} className="header__logo">
        <Store size={28} />
        <span>My Store</span>
      </Link>

      <div className="header__cart-wrapper">
        <Button
          icon={ShoppingCart}
          className="header__cart"
          onClick={handleCartClick}
        />

        {hasItemsInCart && (
          <span className="header__cart-badge">{totalItems}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
