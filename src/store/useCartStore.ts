import { create } from "zustand";
import type { Product, CartItem } from "../types/product";

interface CartState {
  items: CartItem[];
  getTotalPrice: () => number;
  addToCart: (product: Product) => void;
  incrementQty: (id: number) => void;
  decrementQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
const useCartStore = create<CartState>((set, get) => ({
  items: [],

  getTotalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.qty, 0),

  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }

      return {
        items: [...state.items, { ...product, qty: 1 }],
      };
    }),

  incrementQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i,
      ),
    })),

  decrementQty: (id) =>
    set((state) => ({
      items: state.items
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    })),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  clearCart: () =>
    set({
      items: [],
    }),
}));

export default useCartStore;
