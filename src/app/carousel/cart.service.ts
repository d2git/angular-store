import { computed, Injectable, signal } from '@angular/core';

interface ICartItem{
  product: IProduct;
  quantity: number;
}
interface IProduct{
  id: number;
  title: string;
  image: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor() { }

  cartItems = signal<ICartItem[]>([]);

  cartItemsTotal = computed(() => this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0));

  addToCart(product: IProduct): void {
    const index = this.cartItems().findIndex(item =>
      item.product.title === product.title);
    if (index === -1) {
      this.cartItems.update(items => [...items, { product, quantity: 1 }]);
    } else {
      this.cartItems.update(items =>
        [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity + 1 },
          ...items.slice(index + 1)
        ]);
    }
  }
}
