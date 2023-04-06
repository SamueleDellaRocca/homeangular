import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoneModule } from './persone/persone.module';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersoneModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
