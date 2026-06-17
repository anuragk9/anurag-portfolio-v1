import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { PORTFOLIO_DATA } from '../../data/portfolio-data'; // Adjust path as needed

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationData = PORTFOLIO_DATA.education;

  // Configure your Lottie animation here
  options: AnimationOptions = {
    path: 'assets/animations/education.json', // Update this to match your file name
    loop: true,
    autoplay: true,
  };
}