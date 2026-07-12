export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  PRODUCT: "/product/:id",
  CHECKOUT: "/checkout",
  SUCCESS: "/success",

  product: (id: number | string) => `/product/${id}`,
} as const;
