import { Component, Input } from '@angular/core';

@Component({
  selector: 'invent-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() leadColor: string = '';
}
