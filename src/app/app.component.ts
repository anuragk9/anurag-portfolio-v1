import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // Note: this might be styleUrls depending on your Angular minor version
})
export class AppComponent {
  title = 'anurag-portfolio';
}