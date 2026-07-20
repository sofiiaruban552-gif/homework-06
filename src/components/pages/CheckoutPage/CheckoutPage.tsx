import { useState } from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useShallow } from "zustand/shallow";

import { checkoutSchema, type CheckoutForm } from "@/schemas/checkoutSchema";
import useCartStore from "@/store/useCartStore";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import ButtonLink from "@/components/shared/ButtonLink";
import Card from "@/components/shared/Card";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/types/routes";
import CartTotal from "@/components/shared/CartTotal";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { clearCart, items } = useCartStore(
    useShallow((state) => ({
      clearCart: state.clearCart,
      items: state.items,
    })),
  );
  const isEmpty = items.length === 0;

  const totalItems = useCartStore((state) => state.getTotalItems());

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
    setIsSubmitting(true);
    console.log("Checkout data:", data);

    setTimeout(() => {
      clearCart();

      navigate(ROUTES.SUCCESS, {
        state: { fromCheckout: true },
      });
    }, 300);
  };

  return (
    <Card className="flex-column checkout">
      <h1 className="title">Checkout</h1>
      {isEmpty ? (
        <div className="flex-column checkout__empty">
          <p className="text">
            Your cart is empty. There is nothing to check out.
          </p>

          <ButtonLink path={ROUTES.HOME} text="Continue Shopping" />
        </div>
      ) : (
        <>
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
              <div className="checkout__summary">
                <span className="checkout__items">Items: {totalItems}</span>

                <CartTotal />
              </div>

              <Button
                className="btn--success"
                type="submit"
                disabled={!isValid || isSubmitting}
                pulse
              >
                {isSubmitting ? "Placing your order…" : "Checkout"}
              </Button>
            </div>
          </form>
        </>
      )}
    </Card>
  );
};

export default CheckoutPage;
