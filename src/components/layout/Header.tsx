import { Store, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import useCartStore from "@/store/useCartStore";
import { ROUTES } from "@/types/routes";

const Header = () => {
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

      <nav className="header__nav">
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) =>
            clsx("header__link", isActive && "header__link--active")
          }
        >
          Catalog
        </NavLink>

        <NavLink
          to={ROUTES.CART}
          className={({ isActive }) =>
            clsx("header__link", isActive && "header__link--active")
          }
        >
          <div className="header__cart-wrapper">
            <span>Cart</span>

            <span className="header__cart-icon">
              <ShoppingCart className="header__cart" />

              {hasItemsInCart && (
                <span key={totalItems} className="header__cart-badge">
                  {totalItems}
                </span>
              )}
            </span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
