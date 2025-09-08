import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @ViewChild('projectsContainer') projectsContainer!: ElementRef;

  scrollProjects(distance: number) {
    this.projectsContainer.nativeElement.scrollBy({ left: distance, behavior: 'smooth' });
  }
}
