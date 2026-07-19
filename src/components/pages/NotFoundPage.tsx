import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

import Button from "@/components/shared/Button";
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

      <Link to={ROUTES.HOME}>
        <Button pulse>Back to Home</Button>
      </Link>
    </Card>
  );
};

export default NotFoundPage;
