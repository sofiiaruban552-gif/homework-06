export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  PRODUCT: "/product/:id",
  CHECKOUT: "/checkout",

  product: (id: number | string) => `/product/${id}`,
} as const;
