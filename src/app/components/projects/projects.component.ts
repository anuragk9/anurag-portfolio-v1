import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  // We will store the ready-to-render projects here
  projectsWithAnimations: any[] = [];

  ngOnInit() {
    // Map over your raw data exactly once when the component loads
    this.projectsWithAnimations = PORTFOLIO_DATA.projects.map(project => {
      return {
        ...project,
        // Attach a stable options object to each project
        lottieOptions: {
          path: `${project.lottiePath}?v=1`, // Keeps the cache-buster
          loop: true,
          autoplay: true,
        } as AnimationOptions
      };
    });
  }
}