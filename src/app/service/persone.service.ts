import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersoneService {

  persone = [
    { nome: "samuele", cognome: "della rocca", eta: 27, genere: "uomo", telefono: "13121312", citta: "roma", paese: "italia" },
    { nome: "francesco", cognome: "totti", eta: 40, genere: "uomo", telefono: "13121312", citta: "roma", paese: "italia" },
    { nome: "robin", cognome: "van persie", eta: 45, genere: "uomo", telefono: "13121312", citta: "amsterdam", paese: "olanda" },
  ]

  constructor() { }

  prendiPersone() {
    return this.persone;
  }
}
