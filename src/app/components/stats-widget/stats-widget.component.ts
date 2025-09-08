import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-widget.component.html',
  styleUrl: './stats-widget.component.scss'
})
export class StatsWidgetComponent {
  @Input() stats = [
    { title: 'Total Trainings', value: 42 },
    { title: 'Completion Rate', value: '76%' },
    { title: 'Active Trainees', value: 120 },
    { title: 'Upcoming Trainings', value: 4 },
  ];
}
