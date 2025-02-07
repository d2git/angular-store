import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StoreComponent } from './store/store.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StoreComponent, FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'store';
}
