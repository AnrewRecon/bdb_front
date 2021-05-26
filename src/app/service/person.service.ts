import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonModel } from '../model/person.model'
import { ResponseBaseModel } from '../model/responsebase.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  Url = "http://localhost:8080/person";

  findAll() {
    return this.http.get<PersonModel[]>(this.Url)
  }

  save(person : PersonModel) {
    return this.http.post<ResponseBaseModel>(this.Url, person);
  }
}
