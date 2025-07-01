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
      series: [35.1, 23.5, 2.4, 5.4],
      colors: [
        '#1C64F2',
        '#16BDCA',
        '#FDBA8C',
        '#E74694',
        '#FDBA8C',
        '#E74694',
        '#E74694',
      ],
      chart: {
        height: 223,
        width: '100%',
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
        'Hold',
        'RenewalInitiated',
        'RenewalPendingEmail',
        'Engineer Review',
        'Pending Payment',
        'Incomplete',
        'Received',
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'right',
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
