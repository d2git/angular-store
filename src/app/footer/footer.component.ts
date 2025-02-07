import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentDate = new Date();

contentObj = {
    copyright: "Copyright ",
    dash: " - ",
    link: {
      text: "Nextsense",
      link: "https://nextsense.com/"
    }
  }
}




