import {CurrencyPipe, NgFor, NgOptimizedImage } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component, inject, Input} from '@angular/core';
import { CartService } from './cart.service';

interface IProduct{
  id: number;
  title: string;
  image: string,
  price: number
}

@Component({
  selector: 'app-carousel',
  imports: [NgOptimizedImage, NgFor, CurrencyPipe],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent{
  contentObj = {
    cover : {
      src: "/assets/images/cover.jpg", 
      alt: "cover"
    },
    button : "Add to cart"
  }
  

  products: IProduct[] = [];

  constructor(private http: HttpClient ) {

  }

  ngOnInit(): void {
    this.http.get<IProduct[]>("https://fakestoreapi.com/products/category/electronics?limit=5").subscribe((data) => {
      this.products = data;
    })
  }

  getInitialClass(item: IProduct) {
      return item.id == 9 ? ' active' : ''
  }

  convertString(price: string | null){
    return price?.replaceAll(",", "") + ",-";
    }

    productItem!: IProduct;

  @Input() set product(product: IProduct) {
    this.productItem = product;
  }

  cartService = inject(CartService);

  addProduct(productItem: IProduct) {
    this.cartService.addToCart(productItem);
  }

}
