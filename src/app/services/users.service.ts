import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  persone = [
    { nome: "Mauro", cognome: "Rossi", isOnline: false, color: "green" },
    { nome: "Rossella", cognome: "Brescia", isOnline: false, color: "blue" },
    { nome: "Francesco", cognome: "Totti", isOnline: true, color: "yellow" },
    { nome: "Daniele", cognome: "De Rossi", isOnline: true, color: "sky" },
    { nome: "Paulo", cognome: "Dybala", isOnline: true, color: "orange" },
    { nome: "Gallo", cognome: "Belotti", isOnline: true, color: "red" },
  ]

  constructor() { }

  getPersone() {
    return this.persone;
  }


  getPersona(index: number) {
    return this.persone[index];
  }
}
