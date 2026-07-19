import { CheckCircle } from "lucide-react";
import { Navigate } from "react-router-dom";
import useCartStore from "@/store/useCartStore";

import Card from "../shared/Card";
import { ROUTES } from "@/types/routes";
import ButtonLink from "../shared/ButtonLink";

const SuccessPage = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  if (totalItems === 0) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <Card className="flex-column success">
      <CheckCircle size={72} className="success__icon" />

      <h1 className="title">Order placed successfully!</h1>

      <ButtonLink path={ROUTES.HOME} text="Continue Shopping" />
    </Card>
  );
};

export default SuccessPage;
