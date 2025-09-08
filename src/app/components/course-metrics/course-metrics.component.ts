import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-metrics.component.html',
  styleUrl: './course-metrics.component.scss'
})
export class CourseMetricsComponent implements OnInit {
  private courseService = inject(CoursesService);
  courses = this.courseService.courses;

  ngOnInit() {
    this.courseService.fetchCourses();
  }
}
