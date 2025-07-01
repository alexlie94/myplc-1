import { Card } from "../../../invent/card/card";
import { Component } from '@angular/core';
import { Table } from "../../../shared/table/table";

@Component({
  selector: 'app-action-assigned',
  imports: [Card, Table],
  templateUrl: './action-assigned.html',
  styleUrl: './action-assigned.css'
})
export class ActionAssigned {

}
