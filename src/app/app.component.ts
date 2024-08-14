import { Component } from '@angular/core';

import { NavBarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordianComponent } from './components/myAccordian/accordian.component';
import { CarouselComponent } from './components/myCarousel/carousel.component';
import { CardComponent } from './components/myCard/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    BannerComponent,
    AccordianComponent,
    CarouselComponent,
    CardComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first';
}
