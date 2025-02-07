import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
contentArray = [
  {title: "Home", link: "#gallery"},
  {title: "Store", link: "#store"},
  {title: "About", link: "#about"},
  {title: "Contact", link: "#contact"}
]
}
