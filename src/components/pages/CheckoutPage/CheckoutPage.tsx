import { User, Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { checkoutSchema, type CheckoutForm } from "@/schemas/checkoutSchema";
import useCartStore from "@/store/useCartStore";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/routes";
import CartTotal from "@/components/shared/CartTotal";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data: CheckoutForm) => {
    console.log("Checkout data:", data);
    clearCart();
    navigate(ROUTES.SUCCESS);
  };

  return (
    <Card className="flex-column checkout">
      <h1 className="title">Checkout</h1>

      <form
        className="flex-column checkout__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          icon={User}
          placeholder="Name"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          icon={Mail}
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          icon={Phone}
          type="tel"
          placeholder="Phone Number"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          icon={MapPin}
          placeholder="Delivery Address"
          error={errors.address?.message}
          {...register("address")}
        />

        <div className="flex-between checkout__footer">
          <CartTotal />
          <Button
            className="btn btn--success"
            type="submit"
            disabled={!isValid}
          >
            Checkout
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CheckoutPage;
