import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    // সব section এর জন্য observer তৈরি
    const options = {
      threshold: 0.2 // 20% visible হলে trigger হবে
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // animation চালু
        } else {
          entry.target.classList.remove('active'); // চাইলে আবার hide করা যাবে
        }
      });
    }, options);

    // reveal ক্লাস যুক্ত element গুলো observe করা
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => this.observer.observe(el));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
