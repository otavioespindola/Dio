import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/4da45451-5f67-4bec-910c-c72b5758759f'
  constructor(private httpClient: HttpClient) { }

  //Retorna lista de Usuários - READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
