import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-about',
  imports: [NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutData = [
    {
      "title": "Achievements",
      "desc": "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
      "points": [
        {
          "title": "Trusted by Thousands",
          "desc": "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
          "img_url": "/achievements/trusted.png"
        },
        {
          "title": "Award-Winning Courses",
          "desc": "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
          "img_url": "/achievements/awards.png"
        },
        {
          "title": "Positive Student Feedback",
          "desc": "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
          "img_url": "/achievements/feedback.png"
        },
        {
          "title": "Industry Scholarships",
          "desc": "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
          "img_url": "/achievements/partnerships.png"
        }
      ]
    },
    {
      "title": "Our Goals",
      "desc": "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to",
      "points": [
        {
          "title": "Provide Practical Skills",
          "desc": "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
          "img_url": "/goals/skills.png"
        },
        {
          "title": "Foster Creative Problem-Solving",
          "desc": "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
          "img_url": "/goals/problem-solving.png"
        },
        {
          "title": "Promote Collaboration and Community",
          "desc": "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
          "img_url": "/goals/collaboration.png"
        },
        {
          "title": "Stay Ahead of the Curve",
          "desc": "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
          "img_url": "/goals/stay-ahead.png"
        }
      ]
    }
  ];
}
