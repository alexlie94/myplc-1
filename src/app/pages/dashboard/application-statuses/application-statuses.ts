import ApexCharts from 'apexcharts';
import { Card } from '../../../invent/card/card';
import { Component } from '@angular/core';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  colors: string[];
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-application-statuses',
  imports: [Card],
  templateUrl: './application-statuses.html',
  styleUrl: './application-statuses.css',
})
export class ApplicationStatuses {
  chart!: ApexCharts;

  ngAfterViewInit() {
    const chartOptions = this.getChartOptions();

    const chartEl = document.querySelector('#donut-chart');
    if (chartEl) {
      this.chart = new ApexCharts(chartEl, chartOptions);
      this.chart.render();
    }
  }

  getChartOptions() {
    return {
      series: [38, 18, 12, 7, 6, 5, 4, 3, 2, 2, 2, 1],
      colors: [
        '#1E8698',
        '#60A5FA',
        '#6B7280',
        '#A5D8E7',
        '#72C5D4',
        '#93C5FD',
        '#374151',
        '#6EE7B7',
        '#3B82F6',
        '#EDEDED',
        '#FDE68A',
        '#EF4444',
      ],
      chart: {
        height: '100%',
        width: '85%',
        type: 'donut',
      },
      stroke: {
        colors: ['transparent'],
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: 20,
              },
              value: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: -20,
                formatter: function (value: number) {
                  return value + 'k';
                },
              },
            },
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: [
        'Pending Payment',
        'Tox-Review',
        'Incomplete',
        'Hold',
        'Engineer Review',
        'List',
        'Received',
        'Complete',
        'RenewalPendingInvoicePost',
        'RenewalInitiated',
        'Submitted',
        'RenewalPendingEmail',
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'right',
        horizontalAlign: 'center',
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
        markers: {
          width: 12,
          height: 12,
        },
        fontFamily: 'Inter, sans-serif',
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + 'k';
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value: number) {
            return value + 'k';
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  }
}
