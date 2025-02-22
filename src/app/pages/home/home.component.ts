import { Component } from '@angular/core';
import { SponsorsComponent } from "../../shared/sponsors/sponsors.component";
import { CommonModule } from '@angular/common';
import { FaqsComponent } from "../../shared/faqs/faqs.component";

@Component({
  selector: 'app-home',
  imports: [SponsorsComponent, CommonModule, FaqsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  benefits = [
    {
      "number": "01",
      "title": "Flexible Learning Schedule",
      "desc": "Fit your coursework around your existing commitments and obligations."
    },
    {
      "number": "02",
      "title": "Expert Instruction",
      "desc": "Learn from industry experts who have hands-on experience in design and development."
    },
    {
      "number": "03",
      "title": "Diverse Course Offerings",
      "desc": "Explore a wide range of design and development courses covering various topics."
    },
    {
      "number": "04",
      "title": "Updated Curriculum",
      "desc": "Access courses with up-to-date content reflecting the latest trends and industry practices.."
    },
    {
      "number": "05",
      "title": "Practical Projects and Assignments",
      "desc": "Develop a portfolio showcasing your skills and abilities to potential employers."
    },
    {
      "number": "06",
      "title": "Interactive Learning Environment",
      "desc": "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
    }
  ];

  courses = [
    {
      "name": "Web Design Fundamentals",
      "desc": "Learn the fundamentals of web design, including HTML, CSS and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      "teacher": "Takunda",
      "duration": "4 Weeks",
      "level": "Beginner",
      "img_url": "courses/web_design.png"
    },
    {
      "name": "UI/UX Design",
      "desc": "Master the art of creating user interface (UI) and enhancing user experiences (UX). Learn design principles, wire framing, prototyping and usability testing techniques.",
      "teacher": "Love",
      "duration": "6 Weeks",
      "level": "Intermediate",
      "img_url": "courses/ui_ux_design.png"
    },
    {
      "name": "Mobile App Development",
      "desc": "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading software like Swift and Kotlin.",
      "teacher": "Beck",
      "duration": "8 Weeks",
      "level": "Intermediate",
      "img_url": "courses/mobile_development.png"
    },
    {
      "name": "Graphic Design for Beginners",
      "desc": "Discover the fundamentals of graphic design, including typography, color theory, layout design and image manipulation techniques.",
      "teacher": "Joe",
      "duration": "10 Weeks",
      "level": "Beginner",
      "img_url": "courses/graphic_design.png"
    }
  ];

  pricingMode: 'monthly' | 'yearly' = 'monthly';

  togglePricing(mode: 'monthly' | 'yearly') {
    this.pricingMode = mode;
  }
}
