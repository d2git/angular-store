import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from "../about/about.component";
import { GridComponent } from "../grid/grid.component";
import { NavComponent } from "../nav/nav.component";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-store',
  imports: [CarouselComponent, NavComponent, GridComponent, AboutComponent, ContactComponent],
  templateUrl: `./store.component.html`,
  styleUrl: './store.component.scss'
})

export class StoreComponent {

}
