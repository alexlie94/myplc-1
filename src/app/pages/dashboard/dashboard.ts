import ApexCharts from 'apexcharts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  dropdownOpen = false;

  toggleDropdown3() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}

