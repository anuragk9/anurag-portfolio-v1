import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SkillsComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // Note: this might be styleUrls depending on your Angular minor version
})
export class AppComponent {
  title = 'anurag-portfolio';
  showScrollButton = false;

  // Listens to the window scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // 600px is roughly the height of the header component. 
    // The button will appear once the user scrolls past this point.
    this.showScrollButton = window.scrollY > 600;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}