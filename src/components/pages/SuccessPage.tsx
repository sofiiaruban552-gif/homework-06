import { CheckCircle } from "lucide-react";
import { Navigate, useLocation } from "react-router-dom";

import Card from "../shared/Card";
import { ROUTES } from "@/types/routes";
import ButtonLink from "../shared/ButtonLink";

const SuccessPage = () => {
  const location = useLocation();

  if (!location.state?.fromCheckout) {
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
