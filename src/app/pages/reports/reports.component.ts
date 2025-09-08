import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from '../../services/reports.service';
import { CardModule } from 'primeng/card';
import { ChartType, ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, CardModule, NgChartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit{
  private reportService = inject(ReportsService);
  summary = this.reportService.summary;
  courseStats = this.reportService.courseStats;

  ngOnInit() {
    this.reportService.loadReport();
  }

  barChartType: ChartType = 'bar';
  barChartOptions: ChartConfiguration['options'] = { responsive: true };

  barChartData = () => ({
    labels: this.courseStats().map(c => c.name),
    datasets: [
      {
        data: this.courseStats().map(c => c.completion),
        label: 'Completion %',
        backgroundColor: '#42A5F5'
      }
    ]
  });
}
