import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experienceData = PORTFOLIO_DATA.experience;

  options: AnimationOptions = {
    // You'll need to download a new animation for this (e.g., a server rack or coding graphic)
    path: 'assets/animations/experience.json', 
    loop: true,
    autoplay: true,
  };
}