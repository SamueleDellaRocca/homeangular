import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'homeangular';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  opendialog() {
    this.dialog.open(DialogComponent)
  }
}
