import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm = false;
  @ViewChild('userForm', {static: true}) form: any;

  constructor(private userDataService: UserdataService) { }

  ngOnInit() {

      this.users = this.userDataService.getUsers();

      this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }



  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userDataService.addUser(value);

      this.form.reset();
    }
  }


}
