import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    {
      "name": "Web Design Fundamentals",
      "desc": "Learn the fundamentals of web design, including HTML, CSS and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
      "teacher": "Takunda Nyan'ara",
      "duration": "4 Weeks",
      "level": "Beginner",
      "img_urls": ["courses/web_design.png", "courses/web_design_2.png", "courses/web_design_3.png"],
      "curriculum": [
        {
          "name": "01",
          "title": "Introduction to HTML"
        },
        {
          "name": "02",
          "title": "Styling with CSS"
        },
        {
          "name": "03",
          "title": "Introduction to Responsive Design"
        },
        {
          "name": "04",
          "title": "Design Principles for Web"
        },
        {
          "name": "05",
          "title": "Building a Basic Website"
        }
      ]
    },
    {
      "name": "UI/UX Design",
      "desc": "Master the art of creating user interface (UI) and enhancing user experiences (UX). Learn design principles, wire framing, prototyping and usability testing techniques.",
      "teacher": "Love Quinn",
      "duration": "6 Weeks",
      "level": "Intermediate",
      "img_urls": ["courses/ui_ux_design.png", "courses/ui_ux_design_2.png", "courses/ui_ux_design_3.png"],
      "curriculum": [
        {
          "name": "01",
          "title": "Introduction to UI/UX"
        },
        {
          "name": "02",
          "title": "User Research and Proposals"
        },
        {
          "name": "03",
          "title": "Wire-framing and Prototyping"
        },
        {
          "name": "04",
          "title": "Visual Design and Branding"
        },
        {
          "name": "05",
          "title": "Usability Testing and Iteration"
        }
      ]
    },
    {
      "name": "Mobile App Development",
      "desc": "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading software like Swift and Kotlin.",
      "teacher": "Beck",
      "duration": "8 Weeks",
      "level": "Intermediate",
      "img_urls": ["courses/mobile_development.png","courses/mobile_development_2.png", "courses/mobile_development_3.png" ],
      "curriculum": [
        {
          "name": "01",
          "title": "Introduction to Mobile App Development"
        },
        {
          "name": "02",
          "title": "Fundamentals of Swift Programming (iOS)"
        },
        {
          "name": "03",
          "title": "Fundamentals of Kotlin Programming (Android)"
        },
        {
          "name": "04",
          "title": "Building User Interfaces"
        },
        {
          "name": "05",
          "title": "App Development and Testing"
        }
      ]
    },
    {
      "name": "Graphic Design for Beginners",
      "desc": "Discover the fundamentals of graphic design, including typography, color theory, layout design and image manipulation techniques. Create visually stunning designs for print and digital media.",
      "teacher": "Joe Goldberg",
      "duration": "10 Weeks",
      "level": "Beginner",
      "img_urls": ["courses/graphic_design.png", "courses/graphic_design_2.png", "courses/graphic_design_3.png"],
      "curriculum": [
        {
          "name": "01",
          "title": "Introduction to Graphic Design"
        },
        {
          "name": "02",
          "title": "Typography and Color Theory"
        },
        {
          "name": "03",
          "title": "Layout Design and Composition"
        },
        {
          "name": "04",
          "title": "Image Editing and Manipulation"
        },
        {
          "name": "05",
          "title": "App Development and Testing"
        }
      ]
    }
  ];
}
