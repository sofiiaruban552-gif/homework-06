import { CheckCircle } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import useCartStore from "@/store/useCartStore";

import Button from "@/components/shared/Button";
import Card from "../shared/Card";
import { ROUTES } from "@/types/routes";

const SuccessPage = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  if (totalItems === 0) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <Card className="flex-column success">
      <CheckCircle size={72} className="success__icon" />

      <h1 className="title">Order placed successfully!</h1>

      <Link to={ROUTES.HOME}>
        <Button>Continue Shopping</Button>
      </Link>
    </Card>
  );
};

export default SuccessPage;
