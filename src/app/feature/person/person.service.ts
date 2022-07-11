import { Injectable } from '@angular/core';
import {Person} from './person';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders}  from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class PersonService {
   private httpOptions = {
    headers:new HttpHeaders({"Content.Type:":"aplication/json"}) //instancia la clase
}

 private url:string = "http://localhost:8090/api/person";

  constructor(
    private http: HttpClient //instancia la clase y es semjante al repository post, get, delete
  ) { }

  //Create
        public save(person:Person):Observable<Person>{
         return this.http.post<Person>(this.url+"/save",person, this.httpOptions)
    }

    //Read
        public findById(id:number):Observable<Person>{
          return this.http.get<Person> (this.url+"/"+id, this.httpOptions);
    }
}
