import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/4da45451-5f67-4bec-910c-c72b5758759f'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }

  constructor(private httpClient: HttpClient) { }

  //Retorna lista de Usuários - READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva usuário - CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  //Exclui usuário - Delete
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

}
