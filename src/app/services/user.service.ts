import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = 'https://sheet.best/api/sheets/b557d2b6-ac6d-4043-9763-53298ab8d006';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Token': '123'
    })
  }

  constructor(private httpClient: HttpClient) { }
  //retornando a lista
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL);
  }

  //enviando dados pro banco
  postUsers(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  }
}
