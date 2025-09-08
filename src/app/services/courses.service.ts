import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private http = inject(HttpClient);
  courses = signal<any[]>([]);

  fetchCourses() {
    this.http.get<any[]>('http://localhost:3000/courses')
      .subscribe(data => this.courses.set(data));
  }
}