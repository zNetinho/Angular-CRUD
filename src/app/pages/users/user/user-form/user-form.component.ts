import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  user: Array<User> = [];

  constructor(private fb:FormBuilder, private userService: UserService) { 
    this.userForm = this.fb.group({
      id:0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: '',
    })
  }

  ngOnInit(): void {
  }
  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.user = response;
    })
  }
  createUser() {
    this.userForm.get('id')?.patchValue(this.user.length + 1)
    this.userService.postUsers(this.userForm.value).subscribe (result => {
      console.log('Cadastro feito com sucesso')
    })
    console.log(this.userForm)
  }

}
