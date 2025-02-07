import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgFor, CurrencyPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
contentObj = {
  heading: {
    title: "About",
    subtitle: "Nullam vel ipsum rhoncus, finibus sapien eu, pretium ante."
  },
  first: {
    title: ["New", " Heading"],
    subtitle: "Create/Design Content",
    text: {
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius congue arcu, ",
      highlight: "vitae convallis purus",
      text2: " accumsan in. Etiam eu lacus sed nunc iaculis commodo vel et lacus. ",
      link: {
        text: "Sed dictum",
        link: "/"
      },
      text3: " orci lectus, sed euismod ligula scelerisque quis. Cras arcu leo, maximus vel iaculis at, viverra elementum libero. Morbi eget augue cursus, consectetur massa sit amet, molestie neque. Nullam vel ipsum rhoncus, finibus sapien eu, pretium ante."
    },
    list: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet"
    ],
    modal: {
      button: "Open modal",
      text: "Morbi eget augue cursus, consectetur massa sit amet, molestie neque. Nullam vel ipsum rhoncus, finibus sapien eu, pretium ante. Fusce dui lacus, mattis ut lacus vulputate, accumsan interdum massa. In et molestie enim."
    }
  },
  table: {
    headers: ["Item", "Description", "Price"],
    listing: [
      {title: "Item title", description: "Here goes item description in my fancy table", price: 100.00},
      {title: "Item title", description: "Here goes item description in my fancy table", price: 10.00},
      {title: "Item title", description: "Here goes item description in my fancy table", price: 5286.00},
      {title: "Item title", description: "Here goes item description in my fancy table", price: 412.00}
    ]
  }
}

convertString(element: string | null){
return element?.replaceAll(",", "").replace(".", ",");
}

}
