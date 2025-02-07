
import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-grid',
  imports: [NgOptimizedImage, NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  contentObj = {
    title: "Grid",
    subtitle: [
      "Below presented ",
      "responsive",
      " gallery."
    ],
    images:[
      {src: "/assets/images/image1.jpg", alt: "image1"},
      {src: "/assets/images/image2.jpg", alt: "image2"},
      {src: "/assets/images/image3.jpg", alt: "image3"},
      {src: "/assets/images/image4.jpg", alt: "image4"}
    ]
  }
  
}
