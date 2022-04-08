import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }, (err) => {
      console.log('error ao carregar a API', err)
    })
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(response =>{
      console.log("excluido")
    }, (err) => {
      console.log('error ao deletar', err)
    },() => this.getUsers())
  }

}
