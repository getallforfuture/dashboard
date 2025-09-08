import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { StatsWidgetComponent } from '../../components/stats-widget/stats-widget.component';
import { TrainingChartComponent } from '../../components/training-chart/training-chart.component';
import { CourseMetricsComponent } from '../../components/course-metrics/course-metrics.component';
import { ButtonModule } from 'primeng/button';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReportsComponent } from '../reports/reports.component';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonModule,ReportsComponent, CardModule, DragDropModule, CommonModule, StatsWidgetComponent, TrainingChartComponent, CourseMetricsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private auth = inject(AuthService);
  role = this.auth.role;
  isSupervisor = this.auth.isSupervisor;
  isTrainee = this.auth.isTrainee;

  widgets = signal<string[]>(['stats', 'chart']);

  allWidgets = ['stats', 'chart', 'metrics'];

  showMetrics = signal(true);
  toggleMetrics = () => this.showMetrics.update(v => !v);
  switchRole = () => this.auth.switchRole();

  addWidget(widget: string) {
    if (!this.widgets().includes(widget)) {
      this.widgets.update(w => [...w, widget]);
    }
  }

  removeWidget(widget: string) {
    this.widgets.update(w => w.filter(item => item !== widget));
  }

  drop(event: CdkDragDrop<string[]>) {
    const current = [...this.widgets()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.widgets.set(current);
  }

  showWidget(widget: string) {
    switch (widget) {
      case 'stats':
        return '<app-stats-widget />';
      case 'chart':
        return '<app-training-chart />';
      case 'metrics':
        return '<app-course-metrics />';
      case 'reports':
        return '<app-reports />';
      default:
        return '';
    }
  }
}
