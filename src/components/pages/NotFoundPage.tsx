import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

import Button from "@/components/shared/Button";
import { ROUTES } from "@/types/routes";

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <AlertCircle size={72} className="not-found__icon" />

      <h1 className="not-found__title">404</h1>

      <p className="not-found__text">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link to={ROUTES.HOME}>
        <Button className="not-found__button">Back to Home</Button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
