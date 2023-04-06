import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';



@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonaComponent
  ],
})
export class PersoneModule { }
