import { Component } from '@angular/core';
import ApexCharts from 'apexcharts';

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
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  chart!: ApexCharts;

  ngAfterViewInit() {
    const chartOptions = this.getChartOptions();

    const chartEl = document.querySelector("#donut-chart");
    if (chartEl) {
      this.chart = new ApexCharts(chartEl, chartOptions);
      this.chart.render();
    }

    const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => this.handleCheckboxChange(event));
    });
  }

  getChartOptions() {
    return {
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694","#FDBA8C", "#E74694", "#E74694"],
      chart: {
        height: 223,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value: number) {
                  return value + "k";
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
      labels: ["Hold", "RenewalInitiated", "RenewalPendingEmail",
               "Engineer Review","Pending Payment","Incomplete",
              "Received"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "right",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "k";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "k";
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

  handleCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (!this.chart) return;

    if (checkbox.checked) {
      switch (checkbox.value) {
        case 'desktop':
          this.chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case 'tablet':
          this.chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case 'mobile':
          this.chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          this.chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
      }
    } else {
      this.chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }
}

