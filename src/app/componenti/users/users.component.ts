import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  persone: any[] = [];

  constructor(private serviceUsers: UsersService) { }

  ngOnInit() {
    this.persone = this.serviceUsers.getPersone();
    console.log(this.persone);
  }


}
