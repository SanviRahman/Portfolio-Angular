import { Component,ElementRef,ViewChildren,QueryList  } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // one-time animation
        }
      });
    }, { threshold: 0.2 });

    this.animatedElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }
}
