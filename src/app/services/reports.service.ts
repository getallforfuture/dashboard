import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReportsService {
  private http = inject(HttpClient);

  summary = signal<any>(null);
  courseStats = signal<any[]>([]);

  loadReport() {
    this.http.get('http://localhost:3000/reportSummary')
      .subscribe(data => this.summary.set(data));

    this.http.get<any[]>('http://localhost:3000/courseStats')
      .subscribe(data => this.courseStats.set(data));
  }
}