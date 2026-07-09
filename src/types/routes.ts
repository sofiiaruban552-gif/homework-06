export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  PRODUCT: "/product/:id",

  product: (id: number | string) => `/product/${id}`,
} as const;
