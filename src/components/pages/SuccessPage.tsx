import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/shared/Button";
import { ROUTES } from "@/types/routes";

const SuccessPage = () => {
  return (
    <section className="success">
      <CheckCircle size={72} className="success__icon" />

      <h1 className="success__title">Order placed successfully!</h1>

      <Link to={ROUTES.HOME}>
        <Button className="success__button">Continue Shopping</Button>
      </Link>
    </section>
  );
};

export default SuccessPage;
