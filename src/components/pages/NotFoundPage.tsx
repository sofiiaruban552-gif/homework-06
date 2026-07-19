import { AlertCircle } from "lucide-react";

import ButtonLink from "@/components/shared/ButtonLink";
import { ROUTES } from "@/types/routes";
import Card from "../shared/Card";

const NotFoundPage = () => {
  return (
    <Card className="flex-column not-found">
      <AlertCircle size={72} className="not-found__icon" />

      <h1 className="title">404</h1>

      <p className="text">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <ButtonLink path={ROUTES.HOME} text="Back to Home" />
    </Card>
  );
};

export default NotFoundPage;
