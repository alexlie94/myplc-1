import { ActionAssigned } from './action-assigned/action-assigned';
import { ApplicationStatuses } from './application-statuses/application-statuses';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [ActionAssigned, ApplicationStatuses],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
