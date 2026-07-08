export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  qty: number;
}
