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
    this.autoScrollInterval = setInterval(() => {
      if (this.projectsContainer) {
        const container = this.projectsContainer.nativeElement;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: 'smooth' }); // আবার শুরু থেকে শুরু করবে
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000); // প্রতি ৩ সেকেন্ডে অটো স্ক্রল
  }

  ngOnDestroy() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
