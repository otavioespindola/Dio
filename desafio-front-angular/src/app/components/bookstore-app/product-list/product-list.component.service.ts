import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BookService{
    // private url = 'https://sheet.best/api/sheets/1b1e21d7-ee73-4879-8107-7c9500bac61e';
    private url = 'https://apibookstore20220408185052.azurewebsites.net/api/bookstore';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
}