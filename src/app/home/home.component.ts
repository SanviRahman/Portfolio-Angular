import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullText = 'Sheikh Forid Ahmed Shanto';
  typedText = '';
  isDeleting = false;
  speed = 150;

  ngOnInit(): void {
    this.typeWriterLoop();
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.fade-in').forEach((el: Element) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    });
  }


  typeWriterLoop() {
    if (!this.isDeleting) {
      // typing
      if (this.typedText.length < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.typedText.length);
        setTimeout(() => this.typeWriterLoop(), this.speed);
      } 
      else {
        // pause at full text
        this.isDeleting = true;
        setTimeout(() => this.typeWriterLoop(), 1000);
      }
    } 
    else {
      // deleting
      if (this.typedText.length > 0) {
        this.typedText = this.typedText.slice(0, -1);
        setTimeout(() => this.typeWriterLoop(), this.speed / 2);
      } 
      else {
        // reset for next loop
        this.isDeleting = false;
        setTimeout(() => this.typeWriterLoop(), 400);
      }
    }
  }
}
