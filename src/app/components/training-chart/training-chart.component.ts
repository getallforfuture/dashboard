import { Component, inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-training-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './training-chart.component.html',
  styleUrl: './training-chart.component.scss'
})
export class TrainingChartComponent {
  @Input() chartData: number[] = [70, 80, 90];
  @Input() labels: string[] = ['Jan', 'Feb', 'Mar'];

  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'] = { responsive: true };

  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  get barChartData() {
    return {
      labels: this.labels,
      datasets: [{ data: this.chartData, label: 'Completion %' }]
    };
  }
}
