import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  // CREO UN ISTANZA DELL'OGGETTO PERSONA
  samuele = new Persona("samuele", "della rocca", new Date(1995, 12, 7), "19:00");

  constructor() { }

  ngOnInit(): void {
    this.calcoloAnni(this.samuele);
  }

  // DICHIARO UNA FUNZIONE CHE PRENDE COME PARAMENTRO UN'OGGETTO DI TIPO PERSONA, CALCOLA GLI ANNI E LI STAMPA IN CONSOLE
  calcoloAnni(persona: Persona) {
    var diff_ms = Date.now() - persona.dataNascita.getTime();
    var age_dt = new Date(diff_ms);
    let anni = Math.abs(age_dt.getUTCFullYear() - 1970);
    console.log(anni);

    let ore = anni * 12 * 365 * 24;
    console.log(ore);

    let minuti = ore * 60;
    console.log(minuti);
  }

}

// CREO UN INTERFACCIA PERSONA CON I DATI RICHIESTI
interface Persona {
  nome: String;
  cognome: String;
  dataNascita: Date;
  orarioNascita: string;
}

// CREO UN OGGETTO PERSONA CHE IMPLEMENTA L'INTERFACCIA PERSONA
class Persona implements Persona {
  constructor(nome: string, cognome: string, dataNascita: Date, orarioNascita: string,) {
    this.nome = nome;
    this.cognome = cognome;
    this.dataNascita = dataNascita;
    this.orarioNascita = orarioNascita;
  }
}


