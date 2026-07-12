import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "@/types/routes";

import Layout from "./components/layout/Layout";

import CatalogPage from "./components/pages/CatalogPage/CatalogPage";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import CartPage from "./components/pages/CartPage/CartPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import CheckoutPage from "./components/pages/CheckoutPage/CheckoutPage";
import SuccessPage from "./components/pages/SuccessPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<CatalogPage />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTES.SUCCESS} element={<SuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
