import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  info = PORTFOLIO_DATA.personalInfo;
}