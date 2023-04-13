import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'homeangular';

  persone = [
    { nome: "Mauro", cognome: "Rossi", isOnline: false, color: "green" },
    { nome: "Rossella", cognome: "Brescia", isOnline: false, color: "blue" },
    { nome: "Francesco", cognome: "Totti", isOnline: true, color: "yellow" },
    { nome: "Daniele", cognome: "De Rossi", isOnline: true, color: "sky" },
    { nome: "Paulo", cognome: "Dybala", isOnline: true, color: "orange" },
  ]

  indirizzi = ["indirizzo", "viale forza roma"]


  homeform!: FormGroup
  maxDate: any = new Date();
  minDate: any

  constructor() {
    this.pushaIndirizzi(this.persone, this.indirizzi);
    console.log(this.minDate);
  }


  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]),
      cognome: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]),
      dataNascita: new FormControl(),
      dataDecesso: new FormControl(null, Validators.min(this.maxDate)),
      codiceFiscale: new FormControl(null, Validators.pattern("^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}([A-Z]{1}[0-9]{3})[A-Z]{1}$")),
      sesso: new FormControl(null, Validators.required),
    })
  }


  pushaIndirizzi(arrOggetti: Array<any>, array: Array<string>) {
    for (const oggetto of arrOggetti) {
      oggetto[array[0]] = array[1]
    }
    console.log(arrOggetti)
  }

  onSubmit() {
    console.log(this.homeform);
  }


}
