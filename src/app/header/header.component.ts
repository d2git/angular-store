import { Component, HostListener, inject } from '@angular/core';
import { CartService } from '../carousel/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
cartObj = {
  title: "Cart"
}

scrollClass = "";

@HostListener("window:scroll") onScroll (){
  if (window.scrollY > 0){
    this.scrollClass = " sticky";
  } else {
    this.scrollClass = "";
  }
}

cartService = inject(CartService);
}
