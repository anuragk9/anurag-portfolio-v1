import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import { LottieComponent, AnimationOptions } from 'ngx-lottie'; // Import Lottie

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  info = PORTFOLIO_DATA.personalInfo;

  // Lottie Animation Configuration
  options: AnimationOptions = {
    path: 'assets/animations/developer.json',
    loop: true,
    autoplay: true,
  };
}