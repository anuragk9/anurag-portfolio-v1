import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsData = PORTFOLIO_DATA.skills;
  activeCategory = 'All';

  // Automatically generate filter buttons based on your data categories
  categories = ['All', ...this.skillsData.map(s => s.category)];

  setCategory(category: string) {
    this.activeCategory = category;
  }

  get filteredSkills() {
    if (this.activeCategory === 'All') {
      return this.skillsData;
    }
    return this.skillsData.filter(s => s.category === this.activeCategory);
  }
}