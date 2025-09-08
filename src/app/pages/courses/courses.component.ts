import { Component, inject, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  private courseService = inject(CoursesService);
  courses = this.courseService.courses;

  ngOnInit() {
    this.courseService.fetchCourses();
  }
}
