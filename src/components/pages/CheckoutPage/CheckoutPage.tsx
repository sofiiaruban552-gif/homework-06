import { useState } from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import type { SyntheticEvent } from "react";
import useCartStore from "@/store/useCartStore";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CheckoutPage = () => {
  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (field: keyof CheckoutForm) => (value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(form);
  };

  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <section className="checkout">
      <h1 className="checkout__title">Checkout</h1>

      <form className="checkout__form" onSubmit={handleSubmit}>
        <Input
          className="checkout__input"
          icon={User}
          value={form.name}
          onChange={handleChange("name")}
          placeholder="Name"
        />

        <Input
          className="checkout__input"
          icon={Mail}
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          placeholder="Email"
        />

        <Input
          className="checkout__input"
          icon={Phone}
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          placeholder="Phone Number"
        />

        <Input
          className="checkout__input"
          icon={MapPin}
          value={form.address}
          onChange={handleChange("address")}
          placeholder="Delivery Address"
        />
        <div className="checkout__footer">
          <div className="checkout__total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Button className="checkout__submit">Checkout</Button>
        </div>
      </form>
    </section>
  );
};

export default CheckoutPage;
