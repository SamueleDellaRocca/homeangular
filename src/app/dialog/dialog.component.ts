import { Component, OnInit } from '@angular/core';
import { PersoneService } from '../service/persone.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public persone!: any[];
  constructor(private servicePersone: PersoneService) { }

  ngOnInit(): void {
    this.persone = this.servicePersone.prendiPersone();
    console.log(this.persone);
  }

  chudistampa(index: number) {
    console.log(this.persone[index]);
  }

}
