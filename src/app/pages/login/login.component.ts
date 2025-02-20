import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  currentRoute: string = '';
  index: number = 0;
  testimonials = [
    {
      "desc": "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      "student": "Takunda N",
      "period": "Jun 2024"
    },
    {
      "desc": "The Graphic Design for Beginners course was a game-changer for me. The lessons were easy to follow, and the hands-on projects helped me build a strong portfolio. I’m now confident in my design skills!",
      "student": "Maria L",
      "period": "May 2024"
    },
    {
      "desc": "Mobile App Development was challenging but incredibly rewarding. The course materials were well-structured, and the instructors were always available to help. I’ve already started working on my own app!",
      "student": "James K",
      "period": "Apr 2024"
    },
    {
      "desc": "The UI/UX Design course opened my eyes to the importance of user-centered design. The practical assignments and feedback from peers were invaluable. I feel ready to tackle real-world design problems now!",
      "student": "Sofia R",
      "period": "Mar 2024"
    },
    {
      "desc": "Web Design Fundamentals was the perfect starting point for my career in tech. The course covered everything from HTML to responsive design, and the support from the community was amazing. Highly recommend!",
      "student": "Ahmed T",
      "period": "Feb 2024"
    },
    {
      "desc": "I loved the Graphic Design for Beginners course! The step-by-step tutorials and creative exercises made learning fun and effective. I’ve already started freelancing as a graphic designer!",
      "student": "Emily P",
      "period": "Jan 2024"
    },
    {
      "desc": "The Mobile App Development course exceeded my expectations. The real-world projects and mentorship helped me land my first internship. I’m so grateful for this experience!",
      "student": "Diego M",
      "period": "Dec 2023"
    }
  ];

  constructor(
    private router: Router
  ) {}

  currentTestimonial = this.testimonials[this.index];

  ngOnInit(): void {
    this.currentRoute = this.router.url.substring(1);
  };

  nextTestimonial() {
    let maxLength = this.testimonials.length;
    if (this.index < maxLength) {
      this.index = this.index +  1;
      this.currentTestimonial = this.testimonials[this.index];
    }
  }

  previousTestimonial() {
    if (this.index > 0) {
      this.index = this.index -  1;
      this.currentTestimonial = this.testimonials[this.index];
    }
  }
}
