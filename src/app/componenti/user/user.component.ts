import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  persona: any;
  index: number | undefined;

  constructor(private route: ActivatedRoute, private userservice: UsersService) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.index = +params.get('index')!;
      this.persona = this.userservice.getPersona(this.index);
    })
  }

}
