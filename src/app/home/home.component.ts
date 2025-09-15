import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  texts = [
    'Sheikh Forid Ahmed Shanto',
    'Jr. Software Engineer'
  ];
  typedText = '';
  textIndex = 0;
  charIndex = 0;
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
    const currentText = this.texts[this.textIndex];

    if (!this.isDeleting) {
      if (this.charIndex < currentText.length) {
        this.typedText += currentText.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typeWriterLoop(), this.speed);
      } else {
        this.isDeleting = true;
        setTimeout(() => this.typeWriterLoop(), 1000);
      }
    } else {
      if (this.charIndex > 0) {
        this.typedText = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => this.typeWriterLoop(), this.speed / 2);
      } else {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        setTimeout(() => this.typeWriterLoop(), 400);
      }
    }
  }
}
