import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  summary = PORTFOLIO_DATA.personalInfo.summary;
}