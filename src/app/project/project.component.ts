import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterViewInit, OnDestroy {
  @ViewChild('projectsContainer') projectsContainer!: ElementRef;
  private autoScrollInterval: any;

  ngAfterViewInit() {
    const container = this.projectsContainer.nativeElement;
    let scrollAmount = 0;
    const scrollStep = 2; // scroll speed
    const delay = 10; // interval time in ms

    this.autoScrollInterval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0; // loop back
      } else {
        scrollAmount += scrollStep;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }, delay);
  }

  ngOnDestroy() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
