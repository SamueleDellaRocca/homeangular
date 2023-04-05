import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() nome: any
  @Input() cognome: any
  @Input() isOnline: any
  @Input() color: any
}
