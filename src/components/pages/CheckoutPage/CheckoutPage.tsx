import { useShallow } from "zustand/shallow";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { checkoutSchema, type CheckoutForm } from "@/schemas/checkoutSchema";
import useCartStore from "@/store/useCartStore";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/routes";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { totalPrice, clearCart } = useCartStore(
    useShallow((state) => ({
      totalPrice: state.getTotalPrice(),
      clearCart: state.clearCart,
    })),
  );

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
    <section className="checkout">
      <h1 className="checkout__title">Checkout</h1>

      <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="checkout__footer">
          <div className="checkout__total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Button
            className="checkout__submit"
            type="submit"
            disabled={!isValid}
          >
            Checkout
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CheckoutPage;
