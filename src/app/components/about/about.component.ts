import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  options: AnimationOptions = {
    path: 'assets/animations/about.json', // Download a new Lottie JSON for this space
    loop: true,
    autoplay: true,
  };
}