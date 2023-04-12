import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homeangular';

  persone = [
    { nome: "Mauro", cognome: "Rossi", isOnline: false, color: "green" },
    { nome: "Rossella", cognome: "Brescia", isOnline: false, color: "blue" },
    { nome: "Francesco", cognome: "Totti", isOnline: true, color: "yellow" },
    { nome: "Daniele", cognome: "De Rossi", isOnline: true, color: "sky" },
    { nome: "Paulo", cognome: "Dybala", isOnline: true, color: "orange" },
  ]

  indirizzi = ["indirizzo", "viale forza roma"]


  constructor() {
    this.pushaIndirizzi(this.persone, this.indirizzi);
  }


  pushaIndirizzi(arrOggetti: Array<any>, array: Array<string>) {
    for (const oggetto of arrOggetti) {
      oggetto[array[0]] = array[1]
    }
    console.log(arrOggetti)
  }


  onSubmit(form: NgForm) {
    console.log(form);
  }


}
